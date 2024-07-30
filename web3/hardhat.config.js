require("@matterlabs/hardhat-zksync-solc");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  zksolc: {
    version: "1.3.9",
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  defaultNetwork: "theta_testnet",
  networks: {
    hardhat: {},
    sepolia: {
      url: 'https://sepolia.drpc.org',
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    theta_privatenet: {
      url: "http://localhost:18888/rpc",
      accounts: [
         "1111111111111111111111111111111111111111111111111111111111111111",
         "2222222222222222222222222222222222222222222222222222222222222222",
         "3333333333333333333333333333333333333333333333333333333333333333",
      ],
      chainId: 366,
      gasPrice: 4000000000000
    },
    theta_testnet: {
      url: `https://eth-rpc-api-testnet.thetatoken.org/rpc`,
      accounts: ["1111111111111111111111111111111111111111111111111111111111111111"],
      chainId: 365,
      gasPrice: 4000000000000
    },
    theta_mainnet: {
      url: `https://eth-rpc-api.thetatoken.org/rpc`,
      accounts: ["1111111111111111111111111111111111111111111111111111111111111111"],
      chainId: 361,
      gasPrice: 4000000000000
    }

  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
