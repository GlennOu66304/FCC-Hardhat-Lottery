
const networkConfig = {
    100: {
        name: "Gnosis",
        ethUsdPriceFeed: "0xa767f745331D267c7751297D982b050c93985627"
    },
    137: {
        name: "polygon",
        ethUsdPriceFeed: "0xF9680D99D6C9589e2a93a78A04A279e509205945"
    }

}
const developmentChains = ["hardhat", "localhost"]

const DECIMALS = 8
const INITIAL_ANSWER = 200000000000
module.exports = {
    networkConfig,
    developmentChains,
    DECIMALS,
    INITIAL_ANSWER

}