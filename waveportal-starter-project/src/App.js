import React, { useEffect, useState } from "react";

import Wave from "./wave/wave";

import "./style/App.css";
import "./style/App.scss";

const App = () => {

	const [currentAccount, setCurrentAccount] = useState("");


	const checkIfWalletIsConnected = async () => {
		try {
			const { ethereum } = window;

			if (!ethereum) {
				console.log("Make sure you have metamask!");
				return;
			} else {
				console.log("We have the ethereum object", ethereum);
			}

			await window.ethereum.request({
				method: "wallet_switchEthereumChain",
				params: [{ chainId: "0x4" }], // chainId must be in hexadecimal numbers
			});

			const accounts = await ethereum.request({ method: "eth_accounts" });

			if (accounts.length !== 0) {
				const account = accounts[0];
				console.log("Found an authorized account:", account);
				setCurrentAccount(account);
			} else {
				console.log("No authorized account found");
			}
		} catch (error) {
			if (error.code === 4902) {
				try {
					await window.ethereum.request({
					method: 'wallet_addEthereumChain',
					params: [
						{
						chainId: '0x4',
						rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
						},
					],
					});
				} catch (addError) {
					console.error(addError);
				}				}
        // console.error(error);
     	 else {
      // if no window.ethereum then MetaMask is not installed
      alert('MetaMask is not installed. Please consider installing it: https://metamask.io/download.html');
    }
} 		

	};

	/**
	 * Implement your connectWallet method here
	 */
	const connectWallet = async () => {
		try {
			const { ethereum } = window;

			if (!ethereum) {
				alert("Get MetaMask!");
				return;
			}

			const accounts = await ethereum.request({
				method: "eth_requestAccounts",
			});

			console.log("Connected", accounts[0]);
			setCurrentAccount(accounts[0]);
		} catch (error) {
			console.log(error);
		}
	};



	useEffect(() => {
		checkIfWalletIsConnected();

		// async () => {
		// setTotalWaves(waveDisplay());
		// }
	}, []);

	return (
		<div className="mainContainer">
			<div className="dataContainer">
				<div className="header">👋 Hey there!</div>
				<div className="bio">
					I am Yong Kang and I am currently a student at SUTD! Connect your
					Ethereum wallet and wave at me!
				</div>


				{/*
				 * If there is no currentAccount render this button
				 */}
				{!currentAccount && (
					<button className="waveButton" onClick={connectWallet}>
						Connect Wallet
					</button>
				)}
				<Wave/>

			</div>
		</div>
	);
};

export default App;
