import { createGlobalStyle } from 'styled-components'

import { devices }  from './breakpoints'

export default createGlobalStyle`
  ${props => `
    & body {
      background: ${props.theme.palette.secondary};
    }
  `}
`
