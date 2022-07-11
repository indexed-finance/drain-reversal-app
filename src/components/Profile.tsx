import {
    useAccount,
    useConnect,
    useDisconnect,
    useEnsName,
  } from 'wagmi'
import { DisplayPoolStuff } from './PoolTokens'

  export function Profile() {
    const { address, connector, isConnected } = useAccount()
    const { data: ensName } = useEnsName({ address })
    const { connect, connectors, error, isLoading, pendingConnector } =
      useConnect()
    const { disconnect } = useDisconnect()

    if (isConnected && address) {
      return (
        <div>
          <div>{ensName ? `${ensName} (${address})` : address}</div>
          <div>Connected to {connector?.name}</div>
          <button onClick={() => disconnect()}>Disconnect</button>
          <DisplayPoolStuff address={address} />
        </div>
      )
    }

    return (
      <div>
        {connectors.map((connector) => (
          <button
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
          >
            {connector.name}
            {!connector.ready && ' (unsupported)'}
            {isLoading &&
              connector.id === pendingConnector?.id &&
              ' (connecting)'}
          </button>
        ))}

        {error && <div>{error.message}</div>}
      </div>
    )
  }
