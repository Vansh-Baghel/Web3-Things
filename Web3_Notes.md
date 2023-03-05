## Quicknode

- It is website which allows you to **deploy dApps** (Decentralized Apps) and other applications onto over 12 different blockchain networks with immediate provisioning and availability.
- This **creates an Endpoint** through which we can **access the blocks**.

## Etherscan

- It is another website which **allows users to easily search** and **browse transactions and blocks**.
- It contains maximum information about the transaction including the smart contract.

## Connecting the Wallet

- We have to use JsonRpcProvider and pass an https url to connect the account to the blockchain.
- Could be done using

```JS
// where node is the https url from the quicknode
const provider = new ethers.JsonRpcProvider(node);

```

## Getting BlockNumber

- This method returns the **block number**.

```JS
provider.getBlock()
```

## Checking Balance

- We can check the balance of the account.
- There are 2 types of accounts : **EOA (externally owned account) and Smart Contract accounts**.
- EOA is owned by a human which **has a private key** and Smart Contract accounts **doesn't have a private key**.
- We can get the key used in the example from the right column of etherscan website.
- To print the balance in human readable format, we can use **ethers.formatEther** which converts it into ethers.

```JS
const balance = await provider.getBalance('0x690B9A9E9aa1C9dB991C7721a92d351Db4FaC990')
```

## ABI

- It translates the JS code into byte code which etherium machine understands.
- Fills the gap between interface and blockchain.

## Smart Contracts

- All tokens except Etherium, BNB are ERC20 tokens.
- ERC20 tokens have some rules to be listed under it.
- We can get all the information of Smart contract using tokenAddress , ABI .
- tokenAddress is the url of Contract copied from a random ERC20 token from [coingecko](https://www.coingecko.com/en/coins/shiba-inu) in the project.
- ABI code could be accessed from [etherscan](https://etherscan.io/address/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce#code) by pasting the address url and getting the contract.

## Using SmartContract events

- We can get the information of events from [events](https://etherscan.io/address/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce#events) page of etherscan.
- The parameters is also mentioned there in green color.

## How to get testnest balance

- If we are using goerli, dont forget to connect the https of goerli from quicknode else you wont get the balance of goerli.
