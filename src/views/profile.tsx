import { useTheme } from 'styled-components'
import { useAccount, useConnect, useDisconnect, useEnsName } from 'wagmi'

import PoolBalances from '../components/poolbalances'

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

    if (isConnected && address) {
      return (
        <List
          fullWidth={theme.mobile ? true : false}
          direction='column'
          margin='1em'
        >
          <h2>{ensName ? `${ensName} (${address})` : address}</h2>
          <span>Connected to {connector?.name}</span>
          <Button
            onClick={() => disconnect()}
          >
            Disconnect
          </Button>
          <PoolBalances address={address} />
        </List>
      )
    }

    return (
      <List
        direction='column'
        margin='2em 0em'
      >
        {connectors.map((connector) => (
          <Button
              disabled={!connector.ready}
              key={connector.id}
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
