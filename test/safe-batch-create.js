const { waffle } = require("hardhat");
const provider = waffle.provider;

const safeMasterCopy = "0x34CfAC646f301356fAa8B21e94227e3583Fe3F5F";
const proxyFactoryAddress = "0x76E2cFc1F5Fa8F6a5b3fC4c8F4788F0116861F9B";

describe("SafeBatchCreate", function () {
  this.timeout(500000);
  let SafeBatchCreate;
  let safeBatchCreate;
  let accounts;
  before("Setup", async function () {
    SafeBatchCreate = await ethers.getContractFactory("SafeBatchCreate");
    safeBatchCreate = await ethers.getContractAt(
      "SafeBatchCreate",
      process.env.SAFE_BATCH_CREATE
    );

    accounts = await ethers.getSigners();
  });
  it("Should find the safe", async function () {
    const [owner] = accounts;
    console.log("\x1b[36m%s\x1b[0m", "    Using account: ", owner.address);
    console.log(
      "\x1b[36m%s\x1b[0m",
      "    Batch Creator: ",
      safeBatchCreate.address
    );

    found = false;
    while (!found) {
      const factoryNonce = await provider.getTransactionCount(
        proxyFactoryAddress
      );
      console.log(
        "\x1b[1m%s\x1b[0m",
        "    Factory nonce: ",
        factoryNonce.toString()
      );
      const response = await safeBatchCreate.functions.batchCreate(
        safeMasterCopy,
        owner.address,
        process.env.NUM_PER_BATCH
      );
      console.log("\x1b[1m%s\x1b[0m", "    Tx hash:       ", response.hash);
      const receipt = await response.wait();
      const addresses = receipt.logs.map(({ data }) =>
        ethers.utils.getAddress(data.slice(-40))
      );

      found = addresses.includes(process.env.TARGET_ADDRESS);
    }
  });
});
