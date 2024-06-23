/*

Etherjs allows you to read a smart contract as well. A smart contract is a program that runs in the blockchain 

Smart contract we can read and write info from them 

https://etherscan.io/token/0x6b175474e89094c44da98b954eedeac495271d0f#code

A - In order to interact with a contract you need to setup a new contract object with ethers and you need 3 things for that 

    1 - Contract Adress 
    2 - ABI 
    3 - Signer or Provider 

B - The contract address you can get from etherscan 

    0x6b175474e89094c44da98b954eedeac495271d0f#code

C - The ABI we already know is a json obj that descibres the contract functionanlities. You can get that in ehterscan as well. 
    
    You can copy the whole ABI but you can also just grab what you need and this just in ethers. It allows you to store ABI as an arrray. 

    const ERC20_ABI = ['function name() view returns (string)', 'function symbol() view returns (string)', 'function totalSupply() view returns (uint256)', 'function balanceOf(address) view returns (uint)']


D - With these there things you can create a new instance of the contract 

    const contract = new ethers.Contract(address, ERC20_ABI, provider)


E - You can call the instance with its function and get a response 

    const name = await contract.name()



*/

const { ethers } = require('ethers')

const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/7a7ab1f0bf334cc5bb16d2521b8669c7`)

const ERC20_ABI = ['function name() view returns (string)', 'function symbol() view returns (string)', 'function totalSupply() view returns (uint256)', 'function balanceOf(address) view returns (uint)']

const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F' // DAI Contract
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
	const name = await contract.name()
	const symbol = await contract.symbol()
	const supply = await contract.totalSupply()
	const balance = await contract.balanceOf('0x51C72848c68a965f66FA7a88855F9f7784502a7F')

	console.log(name)
	console.log(symbol)
	console.log(supply)
	console.log(ethers.utils.formatEther(balance))
}

main()
