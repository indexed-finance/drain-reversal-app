import { createGlobalStyle } from 'styled-components'

import paneuropean_mono_1 from '../assets/fonts/paneuropean-mono.woff'
import paneuropean_mono_2 from '../assets/fonts/paneuropean-mono.woff2'
import aux_mono from '../assets/fonts/aux-mono.otf'

import { devices }  from './breakpoints'

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
      margin-left: 20px;
      margin-top: -95px;
      border-radius: 100px;
      font-size: .75em;
    }

    & .warning-flag {
       background: rgba(251, 192, 147, 0.5);
       padding: 1em;
       border-radius: 10px;
       float: left;
       margin-top: -25px;
       width: 300px;
       text-align: left;
     }

    &. text-alt {
      color: #c5c5c5;
    }

    & .table-btn {
      font-size: .875em;
      width 7.5em;
    }

    & .navigation-bar {
      width: 100vw;
      height: 5em;
    }

    & .container-main {
      border-radius: 10px;
      padding: 3em 4em;
      width: auto;
    }

    & .pool-redemptions {
      display: table;

      & .table-column {
        display: table-cell;
        width: 150px;
      }
    }

    & .provider-btn {
      height: 4em;
    }

     @media ${devices.mobileS} {

      button {
        font-size: 1.35em;
        border-width: 20px;
      }

      & .provider-btn {
        width: 12.5em;
      }

      & .navigation-bar {
        font-size: .8em;

        & button {
          margin: .125em 2em 0em 0em;
        }
      }

      & .container-main {
        margin: calc(27.5vh - 6.75em) 5%;
        height: calc(80vh - 10em);
      }

      & .wrapper-content {
        & img {
          margin-left: 7.5px;
        }

        & span {
          margin-left: 5px;
        }
      }

    }

    @media ${devices.laptop} {

      & button {
        font-size: 1.1em;
      }

      & .navigation-bar {
        font-size: 1em;

        & button {
          margin: .5em 2em 0em 0em;
        }
      }

      & .provider-btn {
        width: 20em;
      }

      & .container-main {
        margin: calc(27.5vh - 5em) 20%;
        height: auto;
      }

      & .wrapper-content {
        & img {
          margin-left: 45px;
        }

        & span {
          margin-left: -30px;
        }
      }

    }

  `}
`
