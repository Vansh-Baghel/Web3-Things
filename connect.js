// Got this https url from quicknode
// https://misty-spring-county.discover.quiknode.pro/28c2e90c45b6163ce7579fa3f08690c18324c944/

const { ethers, Provider, AnkrProvider } = require("ethers");

const node =
  "https://misty-spring-county.discover.quiknode.pro/28c2e90c45b6163ce7579fa3f08690c18324c944";
const provider = new ethers.JsonRpcProvider(node);

async function main() {
  const blockNumber = await provider.getBlockNumber();
  const block = await provider.getBlock(blockNumber);
  const oneTransaction = await provider.getTransaction(
    "0xf0748aaa2a186e732163cb4090d61140e9904c3487e260737015ca7ba1ad0747"
  );

  console.log(ethers.formatEther(oneTransaction));
}
main();
