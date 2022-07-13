import React, { useState } from 'react'

import { ThemeProvider } from 'styled-components'
import { WagmiConfig } from 'wagmi'

import NavigationBar from './views/navbar'
import Profile from './views/profile'

import Container from './elements/container'
import Button from './elements/button'

import themes from './styles/themes'
import { client } from './config'

const isMobileClient = () => window.innerWidth < 500

function App() {
  const [ mobile, setMobile ] = useState(isMobileClient())
  const [ theme, setTheme ] = useState(themes.light)
  const styles = theme.rwd[`${mobile}`]

  const toggleTheme = () => {
    const invertedTheme = theme === themes.light
      ? themes.dark : themes.light
    document.body.style.backgroundColor =
      invertedTheme.palette.secondary

    setTheme(invertedTheme)
  }

  return (
    <WagmiConfig client={client}>
      <ThemeProvider theme={{ ...theme, mobile }}>
        <NavigationBar
          styles={styles.navigation} onClick={toggleTheme}
        />
        <Container { ...styles.container}>
          <Profile />
        </Container>
      </ThemeProvider>
    </WagmiConfig>
  );
}

export default App
