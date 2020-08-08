/* 
    to run tests, use the following command while in the base directory:
    $ npm run test
*/

const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const { abi, bytecode } = require('../contractArtifacts')

const web3 = new Web3(ganache.provider())

let accounts
let lottery

beforeEach(async () => {
    // // get a list of all accounts
    // accounts = await web3.eth.getAccounts()
    // // use one of those accounts to deploy our contract
    // let deployment = await web3.eth.sendTransaction({
    //     from: accounts[0],
    //     gas: 300000,
    //     data: bytecode
    // })
    // let address = deployment.contractAddress
    // inbox = await new web3.eth.Contract(JSON.parse(abi), address)
})

describe('Lottery', () => {
    // it('deploys a contract', () => {
    //     assert.ok(inbox.options.address)
    // })
    // it('does not have an assigned value to the message property', async () => {
    //     const property = await inbox.methods.message().call()
    //     assert.equal(property, false)
    // })
    // it('sets the message to a new value', async () => {
    //     const assignment = 'this is the new message value'
    //     await inbox.methods.setMessage(assignment).send({
    //         from: accounts[0], 
    //         gas: 80000
    //     })
    //     const message = await inbox.methods.message().call()
    //     assert.equal(message, assignment)
    // })
})
