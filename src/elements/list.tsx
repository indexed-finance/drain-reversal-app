import styled from 'styled-components'
import { ReactNode, Children } from 'react'

interface Props {
  children: ReactNode[];
  direction: string;
}

const InlineList = styled.ul<Props>`
  list-style: none;
  align-content: center;
  align-items: center;
  text-align: center;
  padding: 0px;
  margin: 0px;

  ${props => `
    display: ${props.direction ==
      'column' ? 'block' : 'inline'};
  `}
`

const InlinePoint = styled.li`
  margin: 2em 0em;
  align-content: center;
  align-items: center;
`

export default function List({ children, direction }: Props) {
  return (
    <InlineList direction={direction}>
      {Children.map(
          Children.toArray(children), (e) => (
            <InlinePoint> {e} </InlinePoint>
          )
      )}
    </InlineList>
  )
}
