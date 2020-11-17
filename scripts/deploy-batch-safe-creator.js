async function main() {
  const SafeBatchCreate = await ethers.getContractFactory("SafeBatchCreate");
  const safeBatchCreate = await SafeBatchCreate.deploy();
  console.log("SafeBatchCreate deployed to:", safeBatchCreate.address);
  console.log(ethers.version)
  const safeMasterCopy = '0x34CfAC646f301356fAa8B21e94227e3583Fe3F5F';
  const [owner] = await ethers.getSigners();
  console.log(await safeBatchCreate.functions.batchCreate(
    safeMasterCopy,
    owner.address,
    10,
  ));
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
