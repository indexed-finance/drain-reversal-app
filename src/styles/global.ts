import { createGlobalStyle } from 'styled-components'

import paneuropean_mono_1 from '../assets/fonts/paneuropean-mono.woff'
import paneuropean_mono_2 from '../assets/fonts/paneuropean-mono.woff2'
import aux_mono from '../assets/fonts/aux-mono.otf'

import stylesheet_desktop from './rwd/desktop'
import stylesheet_mobile from './rwd/mobile'
import { devices }  from './rwd/breakpoints'

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

    & h1, h2, h3, h4, h5, button, b {
      font-family: 'Aux Mono';
    }

    & button {
      font-family: 'Akko Paneuropean Mono';
    }

    & .wallet-btn {
      position: absolute;
    }

    & .warning-flag {
       background: rgba(251, 192, 147, 0.5);
       border-radius: 10px;
       text-align: left;
       padding: 1em;
     }

    & .text-alt {
      color: #c5c5c5;
    }

    & .navigation-bar {
      width: 100vw;
      height: 5em;
      z-index: 5;
    }

    & .container-main {
      border-radius: 10px;
      width: auto;
    }

    & .provider-btn {
      height: 4em;
    }

    @media ${devices.mobileS} {

      & .table-column {
        border-top-color: ${props.theme.palette.primary};
      }

      ${stylesheet_mobile}
    }

    @media ${devices.laptop} {
      ${stylesheet_desktop}
    }
  `}
`
