import { useLayoutEffect, useRef, Fragment } from 'react'
import { useTheme } from 'styled-components'
import { useEnsName } from 'wagmi'

import { CenteredWrapper } from '../elements/wraps'

import styled from 'styled-components'
import jazzicon from 'jazzicon'

interface Props {
  address: string;
}

export default function Identicon({ address }: Props) {
    const target = useRef<HTMLDivElement>(document.createElement('div'))
    const { data: ensName } = useEnsName({ address })
    const theme = useTheme()

    useLayoutEffect(() => {
      if(target.current.children.length == 0){
        const formattedAddress =  parseInt(address.slice(2, 10), 16)
        const circumference = theme.mobile ? 100 : 125

        const identicon = jazzicon(circumference, formattedAddress)

        identicon.children[0].style.width = circumference
        identicon.children[0].style.height = circumference

        identicon.style.border = `6px solid ${theme.palette.primary}`
        identicon.style.borderRadius = '250px'

        target.current.appendChild(identicon)
       }
    }, [ address ])

  return(
    <Fragment>
      <CenteredWrapper>
        <a target='_blank' href={`https://etherscan.io/address/${address}`} >
          <div ref={ target } />
        </a>
      </CenteredWrapper>
      <h2> { `${address.substring(0,4)}...${address.substring(38,42)}`} </h2>
      <h3 style={{ color: '#c5c5c5' }}>{ensName ? `(${ensName})`: ''}</h3>
    </Fragment>
  )
}
