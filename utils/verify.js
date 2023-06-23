const { run } = require("hardhat")

const verify = async (contractAddress, args) => {
    consoel.log("Verifying contract...")
    try {
        await run("Verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verifed")) {
            console.log("Already verified!")
        } else {
            console.log(e)
        }
    }
}
module.exports = { verify }
