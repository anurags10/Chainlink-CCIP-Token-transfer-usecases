import * as dotenvenc from "@chainlink/env-enc";
dotenvenc.config();

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "./tasks";

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHEREUM_SEPOLIA_RPC_URL = process.env.ETHEREUM_SEPOLIA_RPC_URL;
// const OPTIMISM_SEPOLIA_RPC_URL = process.env.OPTIMISM_SEPOLIA_RPC_URL;
// const ARBITRUM_SEPOLIA_RPC_URL = process.env.ARBITRUM_SEPOLIA_RPC_URL;
const AVALANCHE_FUJI_RPC_URL = process.env.AVALANCHE_FUJI_RPC_URL;
// const POLYGON_AMOY_RPC_URL = process.env.POLYGON_AMOY_RPC_URL;
// const BNB_CHAIN_TESTNET_RPC_URL = process.env.BNB_CHAIN_TESTNET_RPC_URL;
// const BASE_SEPOLIA_RPC_URL = process.env.BASE_SEPOLIA_RPC_URL;
// const KROMA_SEPOLIA_RPC_URL = process.env.KROMA_SEPOLIA_RPC_URL;
// const WEMIX_TESTNET_RPC_URL = process.env.WEMIX_TESTNET_RPC_URL;
// const GNOSIS_CHIADO_RPC_URL = process.env.GNOSIS_CHIADO_RPC_URL;
// const CELO_ALFAJORES_RPC_URL = process.env.CELO_ALFAJORES_RPC_URL;
// const METIS_SEPOLIA_RPC_URL = process.env.METIS_SEPOLIA_RPC_URL;
// const ZKSYNC_SEPOLIA_RPC_URL = process.env.ZKSYNC_SEPOLIA_RPC_URL;

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    ethereumSepolia: {
      url:
        ETHEREUM_SEPOLIA_RPC_URL !== undefined ? ETHEREUM_SEPOLIA_RPC_URL : "",
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      chainId: 11155111,
    },
    avalancheFuji: {
      url: AVALANCHE_FUJI_RPC_URL !== undefined ? AVALANCHE_FUJI_RPC_URL : "",
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      chainId: 43113,
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};

export default config;
