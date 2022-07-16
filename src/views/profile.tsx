import { useState } from 'react'

import { useTheme } from 'styled-components'
import { useAccount, useConnect } from 'wagmi'

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
    const [ redeem, setRedeem ] = useState(false)

    const toggleRedeem = () => {
      setRedeem(!redeem)
    }

    const theme = useTheme()

    if (isConnected && address) {
      return (
        <List
          fullWidth
          direction='column'
        > <>
            <div style={{ float: 'left', marginRight: '50px' }}>
              <Identicon address={address} />
            </div>
            <PoolBalances redeem={redeem} address={address} />
          </> <>
            <Button
              width='auto'
              height='3em'
              float='right'
              onClick={toggleRedeem}
            >
              {!redeem ? 'Continue': 'Go back' }
            </Button>
            <div className='warning-flag'>
              Withdraw staked assets to redeem the entire amounts displayed.
            </div>
          </>
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
