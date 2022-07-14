import styled, { DefaultProps } from 'styled-components'
import static_styles from '../styles/elements/button'

interface ButtonProps extends DefaultProps {
  secondary?: boolean;
}

export default styled.button<ButtonProps>`
  ${props => `
    border-color: ${props.theme.palette.primary};
    border-radius: ${props.borderRadius};
    color: ${props.theme.palette.primary};
    background: ${props.theme.palette.secondary};
    font-size: ${props.fontSize};
    margin: ${props.margin};
    width: ${props.width};
    float: ${props.float};

    &:hover {
      border-color: ${props.theme.palette.ternary};
      color: ${props.theme.palette.ternary};
    }

    ${props.secondary ? `
      color: ${props.theme.palette.secondary};
      background: ${props.theme.palette.primary};
    ` : ``}
  `}
  ${static_styles}
`
