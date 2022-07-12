import {
    useAccount,
    useConnect,
    useDisconnect,
    useEnsName,
  } from 'wagmi'
import { DisplayPoolStuff } from './PoolTokens'

import Button from '../elements/button'
import List from '../elements/list'

  export function Profile() {
    const { address, connector, isConnected } = useAccount()
    const { data: ensName } = useEnsName({ address })
    const { connect, connectors, error, isLoading, pendingConnector } =
      useConnect()
    const { disconnect } = useDisconnect()

    if (isConnected && address) {
      return (
        <List>
          <h3>{ensName ? `${ensName} (${address})` : address}</h3>
          <span>Connected to {connector?.name}</span>
          <Button onClick={() => disconnect()}>Disconnect</Button>
          <DisplayPoolStuff address={address} />
        </List>
      )
    }

    return (
      <List>
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
