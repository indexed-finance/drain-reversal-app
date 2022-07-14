import { useLayoutEffect, useRef, Fragment } from 'react'
import { useTheme } from 'styled-components'
import { useEnsName } from 'wagmi'

import styled from 'styled-components'
import jazzicon from 'jazzicon'

interface Props {
  address: string;
}

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
`

export default function Identicon({ address }: Props) {
    const target = useRef<HTMLDivElement>(document.createElement('div'))

    const { data: ensName } = useEnsName({ address })
    const theme = useTheme()

    useLayoutEffect(() => {
      const styles = theme.rwd[`${theme.mobile}`]
      const {
        circumference, boxShadow, borderRadius
      } = styles.identicon

      if(target.current.children.length == 0){
        const formattedAddress =  parseInt(address.slice(2, 10), 16)
        const identicon = jazzicon(circumference, formattedAddress)

        identicon.children[0].style.width = circumference
        identicon.children[0].style.height = circumference

        identicon.style.border = `6px solid ${theme.palette.primary}`
        identicon.style.borderRadius = borderRadius
        identicon.style.boxShadow = boxShadow

        target.current.appendChild(identicon)
       }
    }, [ address ])

  return(
    <Fragment>
      <Wrapper>
        <a target='_blank' href={`https://etherscan.io/address/${address}`} >
          <div ref={ target } />
        </a>
      </Wrapper>
      <h1> { `${address.substring(0,4)}...${address.substring(38,42)}`} </h1>
      <h2 style={{ color: '#c5c5c5' }}>{ensName ? `(${ensName})`: ''}</h2>
    </Fragment>
  )
}
