import { DefaultTheme } from 'styled-components'

const dark: DefaultTheme = {
  palette: {
    primary: 'white',
    secondary: 'black',
    ternary: 'aquamarine',
  },
}

const light: DefaultTheme = {
  palette: {
    primary: 'black',
    secondary: 'white',
    ternary: 'aquamarine',
  },
}

export default {
  dark,
  light
}
