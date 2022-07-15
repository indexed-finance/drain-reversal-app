import { useTheme } from 'styled-components'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

import PoolBalances from '../components/poolbalances'
import Identicon from '../components/identicon'

import { ImageTextWrapper } from '../elements/wraps'

import Button from '../elements/button'
import List from '../elements/list'

import walletconnect from '../assets/img/walletconnect.png'
import coinbase from '../assets/img/coinbase.png'
import metamask from '../assets/img/metamask.png'

import { devices } from '../styles/breakpoints'

interface ProviderAssets {
  "WalletConnect": string;
  "Coinbase Wallet": string;
  "MetaMask": string;
}

const assets: ProviderAssets = {
  "WalletConnect": walletconnect,
  "Coinbase Wallet": coinbase,
  "MetaMask": metamask,
}

export default function Profile() {
    const { address, connector, isConnected } = useAccount()
    const {
      connect, connectors, error, isLoading, pendingConnector
    } = useConnect()

    const { disconnect } = useDisconnect()
    const theme = useTheme()

    if (isConnected && address) {
      return (
        <List
          fullWidth={theme.mobile}
          direction='column'
          margin='1em'
        >
          <Identicon address={address} />
          <span>
            Connected to {connector?.name}
          </span>
          <Button
            onClick={() => disconnect()}
            secondary
            animate
          >
            Disconnect
          </Button>
          <PoolBalances address={address} />
        </List>
      )
    }

    return (
      <List
        direction='column' margin='2em 0em'
      >
        {connectors.map((connector) => (
          <Button
              key={connector.id}
              disabled={!connector.ready}
              onClick={() => connect({ connector })}
              className='provider-btn'
              animate
            >
              <ImageTextWrapper className='wrapper-content'>
                <img src={assets[
                    connector.name as keyof ProviderAssets
                  ]}
                />
                <span> {
                  connector.name.charAt(0)
                    + connector.name.slice(1).toLowerCase()
                }</span>
              </ImageTextWrapper>
            </Button>
        ))}
      </List>
    )
  }
