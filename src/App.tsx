import React, { useState } from 'react'

import { ThemeProvider } from 'styled-components'
import { WagmiConfig } from 'wagmi'

import Container from './elements/container'
import Navigation from './elements/navigation'
import Button from './elements/button'

import { Profile } from './components/Profile'

import themes from './styles/themes'
import { client } from './config'

const isMobileClient = () => window.innerWidth < 500

function App() {
  const [ mobile, setMobile ] = useState(isMobileClient())
  const [ theme, setTheme ] = useState(themes.light)
  const styles = theme.rwd[`${mobile}`]

  const toggleTheme = () => {
    const invertedTheme = theme == themes.light
      ? themes.dark : themes.light
    document.body.style.backgroundColor =
      invertedTheme.palette.secondary

    setTheme(invertedTheme)
  }

  return (
    <WagmiConfig client={client}>
      <ThemeProvider theme={{ ...theme, mobile }}>
        <Navigation { ...styles.navigation }>
          <h3> DRAIN REVERSAL </h3>
          <Button onClick={toggleTheme} >
            Dark / Light
          </Button>
        </Navigation>
        <Container { ...styles.container}>
          <Profile />
        </Container>
      </ThemeProvider>
    </WagmiConfig>
  );
}

export default App
