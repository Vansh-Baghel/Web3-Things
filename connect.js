// Got this https url from quicknode
// https://quaint-cosmopolitan-dream.ethereum-goerli.discover.quiknode.pro/8be7a21fe8a61f785780fd8dd00b54f63a34145b/

const { ethers, Provider, AnkrProvider } = require("ethers");

const node =
  "https://quaint-cosmopolitan-dream.ethereum-goerli.discover.quiknode.pro/8be7a21fe8a61f785780fd8dd00b54f63a34145b/";
const provider = new ethers.JsonRpcProvider(node);

async function main() {
// It wont work if the node url is of not of mainnet

  const blockNumber = await provider.getBlockNumber();
  const block = await provider.getBlock(blockNumber);
  const oneTransaction = await provider.getTransaction(
    "0xf0748aaa2a186e732163cb4090d61140e9904c3487e260737015ca7ba1ad0747"
  );

  console.log(ethers.formatEther(oneTransaction));
}
main();
