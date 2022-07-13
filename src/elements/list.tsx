import styled from 'styled-components'
import { ReactNode, Children } from 'react'

import static_styles from '../styles/elements/list'

interface Props {
  children: ReactNode[];
  direction: string;
  margin?: string;
  fullWidth?: boolean;
}

const InlineList = styled.ul<Props>`
  ${props => `
    display: ${props.direction == 'row'
      ? 'inline' : 'block'};
    width: ${props.fullWidth
      ? '100%' : 'auto'};
  `}
  ${static_styles}
`

const InlinePoint = styled.li<Props>`
  ${props => `
    margin: ${props.margin};

    &:first-of-type {
      ${props.direction == 'row'
        ? 'float: left;' : ''};
    }

    &:last-of-type {
      ${props.direction == 'row'
        ? 'float: right;' : ''};
    }
  `}
`

export default function List(props: Props) {
  return (
    <InlineList {...props}>
      {Children.map(
          Children.toArray(props.children), (e) => (
            <InlinePoint {...props}> {e} </InlinePoint>
          )
      )}
    </InlineList>
  )
}
