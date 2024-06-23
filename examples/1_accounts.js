/*

Lets see how we can connect to ether js and read the balance of a wallet 

A - Import ethers to the file 

  const { ethers } = require('ethers')

B - We will use infura to connect to a node. This allows us to not have to download and mantain the node ourselves 

C - So instead of using http request to connect to a node you use what called JSONrpc. In our case will use infura link to create a new provider 

  const provider = new ethers.providers.JsonRpcProvider(`https://arbitrum-mainnet.infura.io/v3/${process.env.ENFURA_API_KEY}`)

  This creates an instance of JsonRpcProvider that connects to the Ethereum mainnet through the Infura service.

D - Now ethers have a special function called get balance where you can pass and address and it will give you its balance 

  This returns a promise so you need to wrap the whole thing into an async function 


    const main = async () => {
	    const balance = await provider.getBalance(address)
	    console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
    }


*/

const { ethers } = require('ethers')

const INFURA_ID = '7a7ab1f0bf334cc5bb16d2521b8669c7'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/7a7ab1f0bf334cc5bb16d2521b8669c7`)

const address = '0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e'

const main = async () => {
	const balance = await provider.getBalance(address)
	console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
}

main()
