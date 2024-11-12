import { defineChain } from "viem";

// TODO: Add Chain details here.
export const monadDevnet = defineChain({
  id: 41454,
  name: "Monad Devnet",
  nativeCurrency: { name: "Monad", symbol: "MON", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["<MONAD_RPC_URL>"],
    },
  },
  blockExplorers: {
    default: {
      name: "Monad Devnet Blockscout",
      url: "<MONAD_BLOCKSCOUT_URL>",
    },
  },
});
