import { useLayoutEffect, useRef, Fragment } from 'react'
import { useTheme } from 'styled-components'
import { useEnsName, useDisconnect } from 'wagmi'

import { CenteredWrapper } from '../elements/wraps'
import Button from '../elements/button'

import jazzicon from 'jazzicon'

export default function Identicon({ address }: { address: string }) {
    const target = useRef<HTMLDivElement>(document.createElement('div'))
    const { data: ensName } = useEnsName({ address })
    const { disconnect } = useDisconnect()
    const theme = useTheme()

    const DisconnectButton = () => (
      <Button
        onClick={() => disconnect()}
        className='wallet-btn'
        secondary
      >
        X
      </Button>
    )

    useLayoutEffect(() => {
      if(target.current.children.length === 0){
        const formattedAddress =  parseInt(address.slice(2, 10), 16)
        const circumference = theme.mobile ? 100 : 75

        const identicon = jazzicon(circumference, formattedAddress)

        identicon.children[0].style.width = circumference
        identicon.children[0].style.height = circumference

        identicon.style.border = `6px solid ${theme.palette.primary}`
        identicon.style.borderRadius = '250px'

        target.current.appendChild(identicon)
       }
    }, [
      theme.palette.primary,
      theme.mobile,
      address
    ])

  return(
    <Fragment>
      <CenteredWrapper>
        <a href={`https://etherscan.io/address/${address}`}
           rel="noreferrer" target='_blank'
        >
          <div ref={ target } />
        </a>
      </CenteredWrapper>
      <DisconnectButton />
      <h3> {`${address.substring(0,4)}...${address.substring(38,42)}`} </h3>
      <h4 className='text-alt'>{ensName ? `(${ensName})`: ''}</h4>
    </Fragment>
  )
}
