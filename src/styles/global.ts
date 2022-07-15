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

    & .navigation-bar {
      width: 100vw;
      height: 5em;
    }

    & .container-main {
      border-radius: 10px;
      padding: 5em 2em;
      width: auto;
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

    @media ${devices.tablet} {

      & button {
        font-size: 1.125em;
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
        margin: calc(27.5vh - 7.5em) 10%;
        height: calc(65vh - 10em);
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
