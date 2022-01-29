// this script compiles and tests our contract


const main = async () => {
	const [owner, randomPerson] = await hre.ethers.getSigners();
	const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
	const waveContract = await waveContractFactory.deploy();
	await waveContract.deployed();

	console.log("Contract deployed to:", waveContract.address);
	console.log("Contract deployed by:", owner.address);

	let waveCount;
	waveCount = await waveContract.getTotalWaves();

	let waveTxn = await waveContract.wave();
	await waveTxn.wait();

	waveCount = await waveContract.getTotalWaves();

// Getting another random person to wave
    waveTxn = await waveContract.connect(randomPerson).wave();
	await waveTxn.wait();

	waveCount = await waveContract.getTotalWaves();

    wavers = await waveContract.getWavers();
};

const runMain = async () => {
	try {
		await main();
		process.exit(0);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

runMain();
