import { DefaultTheme, RwdParams } from 'styled-components'

const mobile: RwdParams = {
  navigation: {
    width: '100vw',
    height: '5em',
    fontSize: '.75em',
  },
  container: {
    margin: 'calc(27.5vh - 7.5em) 10%',
    height: 'calc(75vh - 10em)',
    padding: '5em 2em',
    fontSize: '2em',
    width: 'auto',
  }
};

const native: RwdParams = {
  navigation: {
    width: '100vw',
    height: '5em',
    fontSize: '1em',
  },
  container: {
    margin: 'calc(27.5vh - 7.5em) 10%',
    height: 'calc(75vh - 10em)',
    padding: '5em 2em',
    fontSize: '1.5em',
    width: 'auto',
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
