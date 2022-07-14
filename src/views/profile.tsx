import styled, { useTheme } from 'styled-components'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

import PoolBalances from '../components/poolbalances'
import Identicon from '../components/identicon'

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

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 35px;
    margin-right: auto;
    margin-left: 45px;
    float: left;
  }

  & span {
    align-text: left;
    margin-right: auto;
    margin-left: -30px;
  }
`

export default function Profile() {
    const { address, connector, isConnected } = useAccount()
    const {
      connect, connectors, error, isLoading, pendingConnector
    } = useConnect()

    const { disconnect } = useDisconnect()
    const theme = useTheme()

    const styles = theme.rwd[`${theme.mobile}`]

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
            { ...styles.button }
            onClick={() => disconnect()}
            margin='auto'
            secondary
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
              { ...styles.button }
              disabled={!connector.ready}
              onClick={() => connect({ connector })}
              width='20em'
              height='4em'
            >
              <Wrapper>
              <img
                src={assets[
                  connector.name as keyof ProviderAssets
                ]}
               />
              <span> {connector.name} </span>
              </Wrapper>
              {!connector.ready && ' (unsupported)'}
              {isLoading &&
                connector.id === pendingConnector?.id &&
                ' (connecting)'}
            </Button>
        ))}
      </List>
    )
  }
