## FCC FundMe Block End Tech Stack:

HardHat+Robster+Alchemy

### Manually verifiy

```
npx hardhat verify --network rinkeby DEPLOYED_CONTRACT_ADDRESS "your rinkeby price feed address"
```

[Contract wont get verified on etherscan after deployment ](https://github.com/PatrickAlphaC/hardhat-fund-me-fcc/issues/33)


## Deploy Project

Check it on ropsten etherscan:

[Transactions deployed to: 0x7886734ccDa06cBfc96C73E1f0d4bA62515635e8](https://kovan.etherscan.io/address/0x7886734ccDa06cBfc96C73E1f0d4bA62515635e8#contracts)

local conctract:
0xcae5B5CAC5849F0Dbc7AB21F0B7A9052A0f89C1C

local deploy:
npx hardhat run scripts/deply.js


# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
