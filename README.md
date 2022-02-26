# Basic Sample Hardhat Project
<https://web3-wave.netlify.app>


Demo: <https://web3-wave.netlify.app>

![alt text](https://github.com/[username]/[reponame]/blob/[branch]/image.jpg?raw=true)



## Setup

```
mkdir my-wave-portal
cd my-wave-portal
npm init -y
npm install --save-dev hardhat
npx hardhat
npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers

```

To Make sure everything is running
```
npx hardhat compile
npx hardhat test

```

Running Blockchain script : `npx hardhat run scripts/run.js`
Deploying to local node:

Creating node : `npx hardhat node`

Deploying Locally : `npx hardhat run scripts/deploy.js --network localhost`

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

https://hardhat.org/advanced/hardhat-runtime-environment.html

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
### React
```
1. Run `npm install` at the root of your directory
2. Run `npm run start` to start the project
3. Start coding!
```