import { ethers } from "hardhat";

async function main() {
  const name = "Amrit";
  const symbol = "AMRT";

  const ERC20 = await ethers.getContractFactory("ERC20");
  const lock = await ERC20.deploy(name, symbol);

  await lock.deployed();

  console.log(`ERC20  TOken deployed to ${lock.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
