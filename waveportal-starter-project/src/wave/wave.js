import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { contractAddress,contractABI } from "../config";

import "../style/App.css";
import "../style/App.scss";

class Wave extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentAccount: "",
			totalWaves: 0,
		};
		this.getWaves();
	}
	// const [totalWaves, setTotalWaves] = useState(0);

	 wave = async () => {
		try {
			const { ethereum } = window;

			if (ethereum) {
				const provider = new ethers.providers.Web3Provider(ethereum);
				const signer = provider.getSigner();
				const wavePortalContract = new ethers.Contract(
					contractAddress,
					contractABI,
					signer
				);



				/*
				 * Execute the actual wave from your smart contract
				 */
				const waveTxn = await wavePortalContract.wave();
				console.log("Mining...", waveTxn.hash);

				await waveTxn.wait();
				console.log("Mined -- ", waveTxn.hash);

				let count = await wavePortalContract.getTotalWaves();
				this.setState({ totalWaves: count.toNumber() });
			} else {
				console.log("Ethereum object doesn't exist!");
			}
		} catch (error) {
			console.log(error);
		}
	}

	// setWaves = (val) => {
	// 	this.setState({ totalWaves: val.currentTarget.value });
	// };
	getWaves = async () => {
		try {
			const { ethereum } = window;

			const provider = new ethers.providers.Web3Provider(ethereum);
			const signer = provider.getSigner();
			const wavePortalContract = new ethers.Contract(
				contractAddress,
				contractABI,
				signer
			);

			let count = await wavePortalContract.getTotalWaves();
			// this.setWaves(count.toNumber());
			this.setState({ totalWaves: count.toNumber() });

			// return count.toNumber();
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		return (
			<div className="wave">
				<button className="waveButton" onClick={this.wave}>
					Wave at Me
				</button>
				<h1 className="header">Total Waves</h1>
				<div className="count">{this.state.totalWaves}</div>
			</div>
		);
	}
}
	




export default Wave;