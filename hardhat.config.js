require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();
require('hardhat-deploy');
require("@nomiclabs/hardhat-ethers")
const { API_URL, PRIVATE_KEY0, PRIVATE_KEY1, PRIVATE_KEY2, ETHERSCAN_API } = process.env;


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

// Error HH8: There's one or more errors in your config file:
// https://stackoverflow.com/questions/72562457/error-hh8-theres-one-or-more-errors-in-your-config-file-invalid-value-undef
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.8",
      },
      {
        version: "0.6.6",
      }
    ]
  },
  defaultNetwork: "hardhat",
  networks: {
    Gnosis: {
      url: API_URL || "",
      accounts: []
    }
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    user: {
      default: 1,
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API
  }

};