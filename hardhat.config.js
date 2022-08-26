require("@nomiclabs/hardhat-waffle");
// require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

const { API_URL, PRIVATE_KEY,ETHERSCAN_API } = process.env;


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "ropsten",
  networks: {
    ropsten: {
      url: API_URL,
      accounts: [PRIVATE_KEY]
    }
  },
  // etherscan: {
  //   apiKey: ETHERSCAN_API
  // }
};