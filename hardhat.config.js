require("@nomiclabs/hardhat-waffle");

module.exports = {
	solidity: "0.8.0",
	networks: {
		rinkeby: {
			url: "https://eth-rinkeby.alchemyapi.io/v2/pPft0OvdBJoqwBrN8RAO2y7UxBracOjC",
			accounts: [
				"9f3d7647d38010ea3771f35d0cb96c411daf1857d02917989ea689da8fa3ae4d",
			],
		},
	},
};
