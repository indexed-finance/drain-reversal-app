import { DefaultTheme, RwdParams } from 'styled-components'

const mobile: RwdParams = {
  navigation: {
    width: '100vw',
    height: '10em',
    fontSize: '3em',
  }
};

const native: RwdParams = {
  navigation: {
    width: '100vw',
    height: '15em',
    fontSize: '3em',
  }
};

const dark: DefaultTheme = {
  palette: {
    primary: 'white',
    secondary: 'black',
    ternary: 'aquamarine',
  },
  mobile: false,
  rwd: {
    true: mobile,
    false: native
  }
}

const light: DefaultTheme = {
  palette: {
    primary: 'black',
    secondary: 'white',
    ternary: 'aquamarine',
  },
  mobile: false,
  rwd: {
    true: mobile,
    false: native
  }
}

export default {
  dark,
  light
}
