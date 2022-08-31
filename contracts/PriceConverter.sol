// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

library PriceConverter{
    // latest price is the rate with init
   function getLatestPrice(AggregatorV3Interface priceFeed) public view returns(uint256) {
    //   AggregatorV3Interface priceFeed = AggregatorV3Interface(0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e);
         ( ,int256 price,,,) = priceFeed.latestRoundData();
         return uint256(price * 1e10);
   }

//    rate with decimal 
// price of the final function
// library should be the internal, set the public will cause Error
// FundMe hardhat deploy -> Error: invalid bytecode (argument="bytecode", value="0
// https://github.com/smartcontractkit/full-blockchain-solidity-course-js/discussions/201
function getConversationRate(uint256 ethamount,AggregatorV3Interface priceFeed)  internal view returns(uint256){
    uint256 ethPrice = getLatestPrice(priceFeed);
    //  rate with decimal 
    uint256 ethamountInUsd = (ethamount * ethPrice) / 1e18;

    return  ethamountInUsd;
}

}