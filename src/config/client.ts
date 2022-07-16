// Imports
import { alchemyProvider } from 'wagmi/providers/alchemy'

import { configureChains, chain, createClient } from 'wagmi'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

// Get environment variables
const ALCHEMY_ID = process.env.REACT_APP_ALCHEMY_ID as string

// Set up connectors
export type ConnectorsConfig = { chainId?: number }

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, provider, webSocketProvider } = configureChains([ chain.mainnet ],
  [
    alchemyProvider({ alchemyId: ALCHEMY_ID }),
])

// Set up client
export const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
})
