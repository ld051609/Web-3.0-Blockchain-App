const hre = require("hardhat");

const main = async () => {
  try {
    // Retrieve the contract factory for the "Transactions" contract
    const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
    
    // Deploy the contract
    const transactionsContract = await transactionsFactory.deploy();

    // Wait for the deployment to be mined
    await transactionsContract.waitForDeployment();
    const address = await transactionsContract.getAddress();

    // Log the contract address
    console.log("Transactions address:", address);
  } catch (error) {
    console.error("Error deploying contract:", error);
  }
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
