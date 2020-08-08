require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3')
const { bytecode } = require('./contractArtifacts')

const provider = new HDWalletProvider(
    process.env.MNEMONIC,
    process.env.INFURA_ENDPOINT
)

const web3 = new Web3(provider)

const deploy = async () => {
    const accounts = await web3.eth.getAccounts()
    const transaction = await web3.eth.sendTransaction({
        from: accounts[0],
        gas: 300000,
        data: '0x' + bytecode
    })
    const address = transaction.contractAddress
    console.log(`contract deployed to ${address} from ${accounts[0]}`)
}

deploy()