import { connectorsForWallets, getDefaultWallets } from "@rainbow-me/rainbowkit"
import { configureChains, createClient } from "wagmi"
import { goerli } from "wagmi/chains"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"
import {
  argentWallet,
  braveWallet,
  trustWallet,
  ledgerWallet,
  omniWallet,
  imTokenWallet,
} from "@rainbow-me/rainbowkit/wallets"
import { infuraProvider } from "wagmi/providers/infura";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";


export const { chains, provider, webSocketProvider } = configureChains(
  [goerli],
  [
    // infuraProvider({priority: 1, apiKey: ""}),
    // jsonRpcProvider({
    //   priority: 2,
    //   rpc: chain => ({
    //     http: 'HTTP://127.0.0.1:7545',
    //   })
    // })
    // alchemyProvider({ apiKey: process.env.ALCHEMY_URL as string }),
    publicProvider(),
  ]
)
const { wallets } = getDefaultWallets({
  appName: "Media Dapp",
  chains,
})

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "More",
    wallets: [
      trustWallet({
        chains,
        shimDisconnect: true,
      }),
      argentWallet({ chains }),
      braveWallet({
        chains,
        shimDisconnect: true,
      }),
      ledgerWallet({ chains }),
      omniWallet({ chains }),
      imTokenWallet({ chains }),
    ],
  },
])

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})