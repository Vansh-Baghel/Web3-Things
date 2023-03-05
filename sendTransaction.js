const { ethers } = require("ethers");

const node =
  "https://quaint-cosmopolitan-dream.ethereum-goerli.discover.quiknode.pro/8be7a21fe8a61f785780fd8dd00b54f63a34145b/";
const provider = new ethers.JsonRpcProvider(node);
const receiverKey = "0x77Aa14AC6E3937dcbad055DDd437Cfc6821eb7Cf";
const privateKey =
  "5cae9aad329a0668cff1619252a719100b917dbab9219b3d8f62d1be6f10252b";
const publicKey = "0x77Aa14AC6E3937dcbad055DDd437Cfc6821eb7Cf";
const transaction = {
  to: receiverKey,
  value: ethers.parseEther("0.001"),
};
const wallet = new ethers.Wallet(privateKey, provider);

async function main() {
  wallet.sendTransaction(transaction).then((tx) => console.log(tx));
}

main();
