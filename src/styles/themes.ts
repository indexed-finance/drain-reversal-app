import { DefaultTheme, RwdParams } from 'styled-components'

const mobile: RwdParams = {
  navigation: {
    dimensions: {
      width: '100vw',
      height: '5em',
      fontSize: '.75em',
    },
    button: {
      margin: '.5em 2em 0em 0em',
      borderRadius: '7px'
    }
  },
  container: {
    margin: 'calc(27.5vh - 7.5em) 10%',
    height: 'calc(75vh - 10em)',
    borderRadius: '9px',
    padding: '5em 2em',
    fontSize: '1em',
    width: 'auto',
  },
  button: {
    fontSize: '1.375em',
    borderRadius: '7px'
  },
  identicon: {
    borderRadius: '250px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
    circumference: 100
  }
};

const native: RwdParams = {
  navigation: {
    dimensions: {
      width: '100vw',
      height: '5em',
      fontSize: '1em',
    },
    button: {
      margin: '1.25em 2.5em 0em 0em',
      borderRadius: '7px'
    }
  },
  container: {
    margin: 'calc(27.5vh - 7.5em) 30%',
    height: 'calc(75vh - 10em)',
    borderRadius: '10px',
    padding: '5em 2em',
    fontSize: '1.5em',
    width: 'auto',
  },
  button: {
    fontSize: '1em',
    borderRadius: '7px'
  },
  identicon: {
    borderRadius: '250px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
    circumference: 125
  }
}

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
