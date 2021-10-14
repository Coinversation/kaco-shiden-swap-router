// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  // const PancakeRouter = await ethers.getContractFactory("PancakeRouter");
  // const router = await PancakeRouter.deploy("0x1CeE94a11eAf390B67Aa346E9Dda3019DfaD4f6A", "0x321F318e7C276c93Cf3094fd3a9d7c4362fd19FB");

  // await router.deployed();

  // console.log("router deployed to:", router.address);

  //ERC20 test token
  const ERC20 = await ethers.getContractFactory("ERC20");
  const testToken = await ERC20.deploy("10000000000000000000000000");

  await testToken.deployed();

  console.log("testToken deployed to:", testToken.address);

  // //multicall
  // const Multicall = await ethers.getContractFactory("Multicall");
  // const multicall = await Multicall.deploy();

  // await multicall.deployed();

  // console.log("multicall deployed to:", multicall.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
