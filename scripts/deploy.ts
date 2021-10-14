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
  // const router = await PancakeRouter.deploy("0xcd8620889c1dA22ED228e6C00182177f9dAd16b7", "0x0f933Dc137D21cA519ae4C7E93f87a4C8EF365Ef");

  // await router.deployed();

  // console.log("router deployed to:", router.address);

  // //ERC20 test token
  // const ERC20 = await ethers.getContractFactory("ERC20");
  // const testToken = await ERC20.deploy("10000000000000000000000000");

  // await testToken.deployed();

  // console.log("testToken deployed to:", testToken.address);

  //multicall
  const Multicall = await ethers.getContractFactory("Multicall");
  const multicall = await Multicall.deploy();

  await multicall.deployed();

  console.log("multicall deployed to:", multicall.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
