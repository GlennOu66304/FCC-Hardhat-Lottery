// An example of a deploy script :
// https://github.com/wighawag/hardhat-deploy#an-example-of-a-deploy-script-

const { networkConfig } = require("../helper-hardhat-config")
module.exports = async ({
  getNamedAccounts,
  deployments,
}) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const getChainId = network.config.chainId;
  const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]
  // the following will only deploy "GenericMetaTxProcessor" if the contract was never deployed or if the code changed since last deployment
  const fundMe = await deploy('FundMe', {
    from: deployer,
    gasLimit: 4000000,
    args: [],
    log: true
  });
};



