require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();
require('hardhat-deploy');
require("@nomiclabs/hardhat-ethers")
const { API_URL, PRIVATE_KEY, ETHERSCAN_API} = process.env;

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
    // ether scan issue
    // https://github.com/smartcontractkit/full-blockchain-solidity-course-js/discussions/708
  kovan: {
      url: API_URL || "",
      accounts: [PRIVATE_KEY],
      chainId:42,
      blockConfirmations:6
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
    apiKey:ETHERSCAN_API
 
  }

};