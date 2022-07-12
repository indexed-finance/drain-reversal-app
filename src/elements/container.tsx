import styled, { DefaultProps } from 'styled-components'
import static_styles from '../styles/elements/container'

const InlineContainer = styled.div<DefaultProps>`
  ${props => `
    border-color: ${props.theme.palette.primary};
    background: ${props.theme.palette.secondary};

    width: ${props.width};
    height: ${props.height};
    padding: ${props.padding};
    margin: ${props.margin};
  `}
  ${static_styles}
`

function Container(props: DefaultProps) {
  return (
    <InlineContainer {...props}>
      {props.children}
    </InlineContainer>
  )
}

export default Container
