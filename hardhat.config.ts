import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import { HardhatUserConfig } from "hardhat/config";

// Process Env Variables
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const OWNER_PK = process.env.OWNER_PK;

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  defaultNetwork: "hardhat",

  networks: {
    hardhat: {},

    sepolia: {
      url: "https://sepolia.drpc.org",
      chainId: 11155111,
      accounts: OWNER_PK ? [OWNER_PK] : [],
    },

    avalanche: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      chainId: 43114,
      accounts: OWNER_PK ? [OWNER_PK] : [],
    },
  },

  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};

export default config;
