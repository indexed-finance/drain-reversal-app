import { Children, ReactNode } from 'react'
import styled, { DefaultProps } from 'styled-components'

import List from './list'

interface Props {
  children: ReactNode[];
  width: string;
  height: string;
  fontSize: string;
}

const InlineNavigation = styled.nav<Props>`
  position: fixed;

  ${props => `
    width: ${props.width};
    height: ${props.height};
    font-size: ${props.fontSize};
  `}
`

export default function Navigation(props: Props) {
  return (
    <InlineNavigation>
      <List direction='row' {...props}>
        {props.children}
      </List>
    </InlineNavigation>
  )
}
