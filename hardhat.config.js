require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
const mnemonic =
  process.env.MNEMONIC ||
  "quit quit flower sword interest nominee merit answer science drift nothing borrow";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "localhost",
  networks: {
    hardhat: {
      accounts: {
        mnemonic,
      },
    },
    rinkeby: {
      url: process.env.RINKEBY_JSONRPC_HTTP_URL || "http://localhost:8545",
      accounts: {
        mnemonic,
      },
    },
    polygon: {
      url: process.env.POLYGON_JSONRPC_HTTP_URL || "http://localhost:8545",
      accounts: {
        mnemonic,
      },
    },
  },
};
