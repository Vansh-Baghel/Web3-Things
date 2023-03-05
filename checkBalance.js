// Got this https url from quicknode
// https://quaint-cosmopolitan-dream.ethereum-goerli.discover.quiknode.pro/8be7a21fe8a61f785780fd8dd00b54f63a34145b/

const { ethers, Provider, AnkrProvider } = require("ethers");

const node =
  "https://quaint-cosmopolitan-dream.ethereum-goerli.discover.quiknode.pro/8be7a21fe8a61f785780fd8dd00b54f63a34145b/";
const provider = new ethers.JsonRpcProvider(node);

async function main() {
// It wont work if the node url is of not of mainnet

  const balance = await provider.getBalance(
    "0x77Aa14AC6E3937dcbad055DDd437Cfc6821eb7Cf"
  );

  console.log(ethers.formatEther(balance));
}
main();
