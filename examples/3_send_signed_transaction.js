/*

Ok now lets see how we can speak directly to the blockchain and make a transaction. 

In order to do this well use a testnet so not to use real money 

0 - Before you start use your demo wallet and add money to it with faucets 

A - To create a tx you need 2 things 

    1 - Recievers adress 
    2 - Private key to sign the tx 

    In the real world you would use a provider like metamask to handle private keys and not to expose anyone 

B - Create a new wallet instance that will handle the transaction 

    const wallet = new ethers.Wallet()

C - Pass the pk and the provider 

    const wallet = new ethers.Wallet(pk, provider)

D - Now from the wallet you can access sendTransaction and pass and obj with receiver address and amount 

    const tx = await wallet.sendTransaction({to: "receiver_address",  value: ethers.utils.parseEther("0.01"),})

E- To read the results you need to await 

    await tx.wait()
    console.log(tx)
*/
const { ethers } = require('ethers')

const INFURA_ID = ''

const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/7a7ab1f0bf334cc5bb16d2521b8669c7`)

const sender = '0x7dc51240fc704a3a00f85ed95797145887AD401D'
const pk = '10049d48d1273419e831013f4416e0370eb1cbfb98fb85cbc03aaaa76396d84a'
const recepient = '0x388C818CA8B9251b393131C08a736A67ccB19297'

const main = async () => {
	console.log('hello')
	const senderBalance = await provider.getBalance(sender)
	const receiverBalance = await provider.getBalance(recepient)

	console.log(ethers.utils.formatEther(senderBalance), 'senderBalance Before')
	console.log(ethers.utils.formatEther(receiverBalance), 'receiverBalance Before')

	const wallet = new ethers.Wallet(pk, provider)

	const tx = await wallet.sendTransaction({ to: recepient, value: ethers.utils.parseEther('.025') })

	await tx.wait()
	console.log(tx)

	const senderBalanceAfter = await provider.getBalance(sender)
	const receiverBalanceAfter = await provider.getBalance(recepient)

	console.log(ethers.utils.formatEther(senderBalanceAfter), 'senderBalance After')
	console.log(ethers.utils.formatEther(receiverBalanceAfter), 'receiverBalance After')
}

main()
