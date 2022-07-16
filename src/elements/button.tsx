import styled, { DefaultProps } from 'styled-components'
import static_styles from '../styles/elements/button'

interface ButtonProps extends DefaultProps {
  secondary?: boolean;
  animate?: boolean;
  disabled?: boolean;
}

export default styled.button<ButtonProps>`
  ${props => `
    background: ${props.theme.palette.secondary};
    border-color: ${props.theme.palette.primary};
    border-radius: ${props.borderRadius};
    color: ${props.theme.palette.primary};
    font-size: ${props.fontSize};
    margin: ${props.margin};
    width: ${props.width};
    height: ${props.height};
    float: ${props.float};

    ${props.secondary ? `
      color: ${props.theme.palette.secondary};
      background: ${props.theme.palette.primary};
    ` : ``}

    &:hover {
      border-color: ${props.theme.palette.ternary};
      color: ${props.theme.palette.ternary};
      ${props.animate ?
        'transform: translateY(-5px);' : ''}
    }
  `}
  ${static_styles}
`
