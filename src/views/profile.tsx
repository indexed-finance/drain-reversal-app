import { useState } from 'react'

import { useAccount, useConnect } from 'wagmi'

import PoolBalances from '../components/poolbalances'
import Identicon from '../components/identicon'

import { ImageTextWrapper } from '../elements/wraps'

import Button from '../elements/button'
import List from '../elements/list'

import walletconnect from '../assets/img/walletconnect.png'
import coinbase from '../assets/img/coinbase.png'
import metamask from '../assets/img/metamask.png'

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

export default function Profile({ isMobile }: { isMobile: boolean }) {
    const { address, isConnected } = useAccount()
    const { connect, connectors } = useConnect()
    const [ redeem, setRedeem ] = useState(false)

    const toggleRedeem = () => {
      setRedeem(!redeem)
    }

    const Disclaimer = () => (
      <div className='warning-flag'>
        Withdraw staked assets before redeeming
        to retrieve the amounts displayed.
      </div>
    )

    if (isConnected && address) {
      return (
        <List
          fullWidth
          direction='column'
        >
          {isMobile && (<Disclaimer />)}
          <> <div className='provider-account'>
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
            {!isMobile && (<Disclaimer />)}
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
                <img
                  alt={connector.id}
                  src={assets[
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
