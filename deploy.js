const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying with account:", deployer.address);

    const tokenAddress = "0x28C802394B1075209560522e7bf74d433a7727B8";
    const AirdropClaim = await ethers.getContractFactory("AirdropClaim");
    const airdrop = await AirdropClaim.deploy(tokenAddress);

    await airdrop.waitForDeployment();
    console.log("AirdropClaim deployed to:", airdrop.target);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
