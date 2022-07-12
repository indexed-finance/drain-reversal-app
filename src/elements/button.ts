import styled from 'styled-components'
import static_styles from '../styles/elements/button'

export default styled.button`
  ${props => `
    color: ${props.theme.palette.primary};
    border-color: ${props.theme.palette.primary};

    &:hover {
      color: ${props.theme.palette.ternary};
      border-color: ${props.theme.palette.ternary};
    }
  `}
  ${static_styles}
`
