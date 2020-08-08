# Lottery Smart Contract in Solidity

## Description
This is a smart contract written in Solidity following a section of [Stephen Grider's Udemy course](https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/). The code has been refactored to work with Solidity 0.7.0. 

## Instructions
1. Clone respository, navigate to the directory path on your terminal and run ```npm install```.

2. Run ```touch .env``` to generate a file to store your local environment variables.

3. Sign up for [Infura](https://infura.io/), create a project and copy the endpoint for the network you wish to deploy to.

4. Add a 12 phrase mnemonic and your Infura endpoint to your .env file as 'MNEMONIC' and 'INFURA_ENDPOINT'.

5. Run ```node deploy.js```.

6. Copy the contract's address from the console output, and verify the contract's deployment on [Etherscan](etherscan.io). Make sure you're checking the right network on Etherscan if you're not deploying the the Ethereum main net.

## Additional notes
If you would like to modify the smart contract, make sure you recompile the solidity file. 

For this project I used [solc](https://www.npmjs.com/package/solc), which I have installed globally on my machine. 

To compile to bytecode from the base of your directory, run ```solcjs ./contracts/Lottery.sol --bin``` to create plain text file in your directory with the contract's bytecode. 

Run ```solcjs ./contracts/Lottery.sol --abi``` for a file with the smart contract's application binary interface (abi). 

