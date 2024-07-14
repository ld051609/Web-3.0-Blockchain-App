require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const ALCHEMY_API_KEY = "0NVg9oqmpuHJMqx_ogABB6yCnvfqoCi9"
const SEPOLIA_PRIVATE_KEY = "7eefa88646e8c80ec3454f15ad13f03437e1634ced23b22a9408d2ca41ecf874"

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};
