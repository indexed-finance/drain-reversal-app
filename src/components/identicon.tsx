import { useLayoutEffect, useRef } from 'react'
import { useTheme } from 'styled-components'

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

        identicon.style.borderColor = `${theme.palette.primary}`
        identicon.style.borderStyle = 'solid'
        identicon.style.borderWidth = '6px'

        identicon.style.borderRadius = borderRadius
        identicon.style.boxShadow = boxShadow

        target.current.appendChild(identicon)
       }
    }, [ address ])

  return(
    <Wrapper>
      <a target='_blank' href={`https://etherscan.io/address/${address}`} >
        <div ref={ target } />
      </a>
    </Wrapper>
  )
}
