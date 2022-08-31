
const {run} = require("hardhat")


const verify = async (contractAddress,args)=>{
    console.log("verify contract")
    try {
        await run(
            "verify:verify",{
                address:contractAddress,
                // please add s at the end of constructorArguments
                // Error: The constructor for contracts/voting.sol:voting has 1 parameters but 0 arguments were provided instead.
                // https://github.com/smartcontractkit/full-blockchain-solidity-course-js/discussions/1439
                constructorArguments:args
              
            }
        )
    } catch (e) {
        if(e.message.toLowerCase().includes("already verified")){
            console.log("Already verified!")

        }
        console.log(e)
    }
}

module.exports = {verify}