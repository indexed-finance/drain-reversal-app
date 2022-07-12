import styled from 'styled-components'
import { ReactNode, Children } from 'react'

const InlineList = styled.ul`
  list-style: none;
  align-content: center;
  text-align: center;
  padding: 0px;
  margin: 0px;
`

const InlinePoint = styled.li`
  margin: 1em 0em;
`

// Interface required
interface Props {
  children?: ReactNode[];
}

export default function List({ children }: Props) {
  return (
    <InlineList>
      {Children.map(children, (e) => <InlinePoint> {e} </InlinePoint> )}
    </InlineList>
  )
}
