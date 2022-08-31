// An example of a deploy script :
// https://github.com/wighawag/hardhat-deploy#an-example-of-a-deploy-script-

const { network } = require("hardhat");

module.exports = async ({
    getNamedAccounts,
    deployments,
    getChainId,
    getUnnamedAccounts,
  }) => {
    const {deploy,log} = deployments;
    const {deployer} = await getNamedAccounts();
    const getChainId = network.config.chainId;
    // the following will only deploy "GenericMetaTxProcessor" if the contract was never deployed or if the code changed since last deployment
    // await deploy('GenericMetaTxProcessor', {
    //   from: deployer,
    //   gasLimit: 4000000,
    //   args: [],
    // });
  };



