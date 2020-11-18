const { waffle } = require("hardhat");
const provider = waffle.provider;

const safeMasterCopy = '0x34CfAC646f301356fAa8B21e94227e3583Fe3F5F';
const proxyFactoryAddress = '0x76E2cFc1F5Fa8F6a5b3fC4c8F4788F0116861F9B'

describe("SafeBatchCreate", function() {
  let SafeBatchCreate
  let safeBatchCreate
  let accounts
  before('Deploy SafeBatchCreate', async function() {
    SafeBatchCreate = await ethers.getContractFactory("SafeBatchCreate");
    safeBatchCreate = await SafeBatchCreate.deploy();
    await safeBatchCreate.deployed();

    accounts = await ethers.getSigners();
  });
  it("Should return the new greeting once it's changed", async function() {
    const [owner] = accounts
    found = false;
    while (!found) {
      const factoryNonce = await provider.getTransactionCount(proxyFactoryAddress)
      console.log('factory nonce', factoryNonce.toString())
      const response = await safeBatchCreate.functions.batchCreate(
        safeMasterCopy,
        owner.address,
        25,
      )
      const receipt = await response.wait()
      const addresses = receipt.logs.map(({ data }) => ethers.utils.getAddress(data.slice(-40)))

      found = (addresses.includes(process.env.TARGET_ADDRESS))
    }
  });
});
