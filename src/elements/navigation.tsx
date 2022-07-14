import styled, { DefaultProps } from 'styled-components'

import static_styles from '../styles/elements/navigation'

import List from './list'

const InlineNavigation = styled.div<DefaultProps>`
  ${props => `
    width: ${props.width};
    height: ${props.height};
    font-size: ${props.fontSize};
    color: ${props.theme.palette.primary};
    border-bottom-color: ${props.theme.palette.primary};
  `}
  ${static_styles}
`

export default function Navigation(props: DefaultProps) {
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
