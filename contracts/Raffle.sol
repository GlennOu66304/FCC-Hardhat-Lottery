// SPDX-License-Identifier: GPL-3.0
// Goal
// 1.deposit the toen into the contract
// 1.1 ge the conversation rate from the chain link feeds
// 1.2 by using this function get the token back
// 2.withdraw the token from the contract
pragma solidity >=0.7.0 <0.9.0;
error not_enoughFee();

contract Raffle {
    uint256 private immutable i_entranceFee;
    address[] private players;

    constructor(uint256 entranceFee) {
        i_entranceFee = entranceFee;
    }
// enter the raffle
    function enterRaffle() public payable {
        if (msg.value < i_entranceFee) revert not_enoughFee();
        players.push(payable(msg.sender));
    }
    // pick the winner

}
