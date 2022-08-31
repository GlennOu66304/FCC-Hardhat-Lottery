// An example of a deploy script :
// https://github.com/wighawag/hardhat-deploy#an-example-of-a-deploy-script-
const { getNamedAccounts, deployments, network } = require("hardhat")
const { networkConfig, developmentChains } = require("../helper-hardhat-config")
const {  ETHERSCAN_API} = process.env;
const { verify } = require("../utils/verify")
require('dotenv').config();
module.exports = async ({
  getNamedAccounts,
  deployments,
}) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  // const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]
  let ethUsdPriceFeedAddress
  if (developmentChains.includes(network.name)) {
    const ethUsdAggregator = await deployments.get("MockV3Aggregator")
    ethUsdPriceFeedAddress = ethUsdAggregator.address
    console.log(ethUsdPriceFeedAddress)

  } else {
    ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]
  }
  const args = [ethUsdPriceFeedAddress]
  const fundme = await deploy('FundMe', {
    from: deployer,
    args:args,
    log: true,
    waitConfirmations:network.config.blockConfirmations || 1
  });

  if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API) {
    await verify(fundme.address, args)
  }
  log("----------------------------------------------")
};

// if you dont add the tags here will casue the "TypeError: deployScript.func is not a function"
module.exports.tags = ["all", "fundme"]



