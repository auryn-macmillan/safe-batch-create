require('dotenv').config()
require("@nomiclabs/hardhat-waffle");
const mnemonic = process.env.MNEMONIC

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
    version: "0.5.3",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: process.env.RINKEBY_JSONRPC_HTTP_URL,
      accounts: {
        mnemonic
      }
    }
  }
};
