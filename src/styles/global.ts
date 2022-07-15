import { createGlobalStyle } from 'styled-components'

import { devices }  from './breakpoints'

import aux_mono from '../assets/fonts/aux-mono.otf'
import paneuropean_mono_1 from '../assets/fonts/paneuropean-mono.woff'
import paneuropean_mono_2 from '../assets/fonts/paneuropean-mono.woff2'

export default createGlobalStyle`
  ${props => `

    @font-face {
      font-family: 'Akko Paneuropean Mono';
      src: url(${paneuropean_mono_1}) format('woff'),
           url(${paneuropean_mono_2}) format('woff2');
    }

    @font-face {
      font-family: 'Aux Mono';
      src: url(${aux_mono}) format('otf');
    }

    & body {
      background: ${props.theme.palette.secondary};
      font-family: 'Akko Paneuropean Mono';
    }

    & h1, h2, h3 {
      font-family: 'Aux Mono';
    }

    & button {
      font-family: 'Akko Paneuropean Mono';
    }

     @media ${devices.mobileS} {
      button {
        font-size: 1.35em;
      }
    }

    @media ${devices.tablet} {

      button {
        font-size: 1.125em;
      }

    }
  `}
`
