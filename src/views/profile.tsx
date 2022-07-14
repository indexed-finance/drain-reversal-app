import { useTheme } from 'styled-components'
import { useAccount, useConnect, useDisconnect, useEnsName } from 'wagmi'

import PoolBalances from '../components/poolbalances'
import Identicon from '../components/identicon'

import Button from '../elements/button'
import List from '../elements/list'

export default function Profile() {
    const { address, connector, isConnected } = useAccount()
    const {
      connect, connectors, error, isLoading, pendingConnector
    } = useConnect()

    const { data: ensName } = useEnsName({ address })
    const { disconnect } = useDisconnect()
    const theme = useTheme()

    const styles = theme.rwd[`${theme.mobile}`]

    if (isConnected && address) {
      const formattedAddress = `${address.substring(0,4)}...
        ${address.substring(38,42)}`
      return (
        <List
          fullWidth={theme.mobile}
          direction='column'
          margin='1em'
        >
          <Identicon address={address} />
          <h1>
            { `${address.substring(0,4)}...${address.substring(38,42)}`}
          </h1>
          <h2 style={{ color: 'grey' }}>{ensName ? `(${ensName})`: ''}</h2>
          <span>Connected to {connector?.name}</span>
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
              width='10em'
            >
              {connector.name}
              {!connector.ready && ' (unsupported)'}
              {isLoading &&
                connector.id === pendingConnector?.id &&
                ' (connecting)'}
            </Button>
        ))}
      </List>
    )
  }
