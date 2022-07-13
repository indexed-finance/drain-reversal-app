import { Children, ReactNode } from 'react'
import styled, { DefaultProps } from 'styled-components'

import List from './list'

interface Props {
  children: ReactNode[];
  width: string;
  height: string;
  fontSize: string;
}

const InlineNavigation = styled.div<DefaultProps>`
  position: fixed;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  top: 0%;

  ${props => `
    width: ${props.width};
    height: ${props.height};
    font-size: ${props.fontSize};
    color: ${props.theme.palette.primary};
    border-bottom-color: ${props.theme.palette.primary};
  `}
`

export default function Navigation(props: Props) {
  return (
    <InlineNavigation {...props}>
      <List
        direction='row'
        margin='.5em 0em'
      >
        {props.children}
      </List>
    </InlineNavigation>
  )
}
