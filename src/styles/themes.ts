import { DefaultTheme } from 'styled-components'

const dark: DefaultTheme = {
  palette: {
    primary: 'white',
    secondary: 'black',
    ternary: 'aquamarine',
  },
  mobile: false
}

const light: DefaultTheme = {
  palette: {
    primary: 'black',
    secondary: 'white',
    ternary: 'aquamarine',
  },
  mobile: false
}

const themes = { light, dark }

export default themes
