import { ethers } from "hardhat";
// const Minter = "../artifacts/contracts/Minter.sol/Minter.json"
// const metadata = "../metadata"
import fs from "fs"

async function main() {
    const [owner, customer] = await ethers.getSigners();
    const Purple = await ethers.getContractFactory("Purple");
    const purple = await Purple.deploy(owner.address);

    await purple.deployed();

    fs.writeFileSync("src/purpleAddress.js", `export const purpleAddress = "${purple.address}"`)

}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
