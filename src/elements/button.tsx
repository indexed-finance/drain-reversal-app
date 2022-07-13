import styled, { DefaultProps } from 'styled-components'
import static_styles from '../styles/elements/button'

export default styled.button<DefaultProps>`
  ${props => `
    width: ${props.width};
    float: ${props.float};
    font-size: ${props.fontSize};
    color: ${props.theme.palette.primary};
    border-color: ${props.theme.palette.primary};

    &:hover {
      color: ${props.theme.palette.ternary};
      border-color: ${props.theme.palette.ternary};
    }
  `}
  ${static_styles}
`
