import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract, Signer } from "ethers";

describe("Purple", async function () {

    function etherToWei(_etherAmount: any) {
        return ethers.utils.parseUnits(_etherAmount, "ether")
    }
    let deployedPurple: Contract
    let owner:any, customer: any

    before(async () => {
        [owner, customer] = await ethers.getSigners();

        const Purple = await ethers.getContractFactory("Purple");
        deployedPurple = await Purple.deploy(customer);

        deployedPurple.deployed()
    })

    it("Should accept payment", async function(){
        expect(await deployedPurple.connect(customer).acceptPayment({value: etherToWei("10")})).to.changeEtherBalances([deployedPurple.address, customer.address], ["10", "-10"])
    })

    it("fetches total earnings", async function(){
        const totalCollected = await deployedPurple.getTotalAmountReceived()
        expect(totalCollected).to.equal(etherToWei("10"))
    })

    it("pays total earnings to owner", async function(){
        const totalCollected = await deployedPurple.getTotalAmountReceived()
        const withdrawalReceipt = await deployedPurple.connect(owner).withdraw(owner.address)
        expect(withdrawalReceipt).to.changeEtherBalances([deployedPurple.address, owner.address], [`-${totalCollected}`, totalCollected])
        // console.log(totalCollected.toString())
    })

    it("finds out how much an address paid", async function(){
        expect(await deployedPurple.getAmountReceived(customer.address)).to.equal(etherToWei("10"))
    })

})

