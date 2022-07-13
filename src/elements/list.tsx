import styled from 'styled-components'
import { ReactNode, Children } from 'react'

interface Props {
  children: ReactNode[];
  direction: string;
  margin?: string;
}

const InlineList = styled.ul<Props>`
  align-content: center;
  align-items: center;
  list-style: none;
  padding: 0px;
  margin: 0px;

  ${props => `
    display: ${props.direction == 'row'
      ? 'inline' : 'block'};
  `}
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
  const { children } = props

  return (
    <InlineList {...props}>
      {Children.map(
          Children.toArray(children), (e) => (
            <InlinePoint {...props}> {e} </InlinePoint>
          )
      )}
    </InlineList>
  )
}
