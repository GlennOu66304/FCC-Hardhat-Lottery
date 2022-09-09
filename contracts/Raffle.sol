// SPDX-License-Identifier: GPL-3.0
// Goal
// 1.deposit the toen into the contract
// 1.1 ge the conversation rate from the chain link feeds
// 1.2 by using this function get the token back
// 2.withdraw the token from the contract
import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";
pragma solidity >=0.7.0 <0.9.0;
error not_enoughFee();

contract Raffle is VRFConsumerBaseV2 {
    uint256 private immutable i_entranceFee;
    address[] private players;
    event playerEnter(address indexed player);

    constructor(address vrfCoordinatorV2, uint256 entranceFee)
        VRFConsumerBaseV2(vrfCoordinatorV2)
    {
        i_entranceFee = entranceFee;
    }

    // enter the raffle
    function enterRaffle() public payable {
        if (msg.value < i_entranceFee) revert not_enoughFee();
        players.push(payable(msg.sender));

        emit playerEnter(msg.sender);
    }

    function requestRandomNumber() external {}

    function fulfillRandomWords(uint256 requestId, uint256[] memory randomWords)
        internal
        override
    {}

    // get entrance fee
    function getEntranceFee() public view returns (uint256) {
        return i_entranceFee;
    }

    // pick the winner
    function getWinnder(uint256 index) public view returns (address) {
        return players[index];
    }
}
