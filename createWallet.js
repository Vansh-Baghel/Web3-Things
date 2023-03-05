const {ethers} = require('ethers');

const node = 'https://quaint-cosmopolitan-dream.ethereum-goerli.discover.quiknode.pro/8be7a21fe8a61f785780fd8dd00b54f63a34145b/'
const provider = new ethers.JsonRpcProvider(node);

async function main() {
    const wallet = ethers.Wallet.createRandom()
    console.log(wallet.address);
    console.log(wallet.mnemonic);
    console.log(wallet.publicKey);
    console.log(wallet.privateKey);
}

main()