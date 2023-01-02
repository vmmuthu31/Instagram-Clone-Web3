import '../styles/globals.css'
import "@rainbow-me/rainbowkit/styles.css"
import "../styles/globals.css"
import { AppProvider } from '../context/context'
import type { AppProps } from "next/app"
import { WagmiConfig } from "wagmi"
import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { chains, wagmiClient } from "../config/walletConfig"
import { getSession, SessionProvider } from "next-auth/react"
import { GetServerSideProps } from "next"
import { getToken } from "next-auth/jwt"


export default function App({ Component, pageProps }: AppProps) {

  return (
    <WagmiConfig client={wagmiClient}>
      <SessionProvider refetchInterval={0} session={pageProps.session}>
          <RainbowKitProvider chains={chains} theme={darkTheme()} coolMode>
            <AppProvider>
            <Component {...pageProps} />
            </AppProvider>
          </RainbowKitProvider>
      </SessionProvider>
    </WagmiConfig>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)
  const token = await getToken({ req: context.req })
  const address = token?.sub ?? null
  return {
    props: {
      session,
      address,
    },
  }
}
