const { getNamedAccounts, deployments, network } = require("hardhat")
const {developmentChains,DECIMALS,INITIAL_ANSWER} = require("../helper-hardhat-config")
module.exports = async ({
    getNamedAccounts,
    deployments,
}) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    if(developmentChains.includes(network.name)){
        log("local nwtwork detectd network detected, deploy mock....")
        await deploy('MockV3Aggregator', {
            from: deployer,
            gasLimit: 4000000,
            args: [DECIMALS,INITIAL_ANSWER],
            log: true
          });

          log("mock deployed!")
    }
}

module.exports.tags = ["all","mocks"]