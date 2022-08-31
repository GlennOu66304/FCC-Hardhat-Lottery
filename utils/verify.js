
const {run} = require("hardhat")


const verify = async (contractAddress,args)=>{
    console.log("verify contract")
    try {
        await run(
            "verify:verify",{
                address:contractAddress,
                constructorArgument:args
            }
        )
    } catch (e) {
        if(e.message.lowerCase().includes("already verified")){
            console.log("Already verified!")

        }
        console.log(e)
    }
}

module.exports = {verify}