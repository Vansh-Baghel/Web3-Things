// Got this https url from quicknode
// https://misty-spring-county.discover.quiknode.pro/28c2e90c45b6163ce7579fa3f08690c18324c944/

const { ethers, Provider, AnkrProvider } = require("ethers");

const node =
  "https://misty-spring-county.discover.quiknode.pro/28c2e90c45b6163ce7579fa3f08690c18324c944";
const provider = new ethers.JsonRpcProvider(node);

async function main() {
  const balance = await provider.getBalance(
    "0x690B9A9E9aa1C9dB991C7721a92d351Db4FaC990"
  );

  console.log(ethers.formatEther(balance));
}
main();
