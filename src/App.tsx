import React, { useState } from 'react'

import { ThemeProvider } from 'styled-components'
import { WagmiConfig } from 'wagmi'

import NavigationBar from './views/navbar'
import Profile from './views/profile'

import Container from './elements/container'
import StyleSheet from './styles/global'

import themes from './styles/themes'
import { client } from './config'

const isMobileClient = () => window.innerWidth < 500

function App() {
  const [ mobile, setMobile ] = useState(isMobileClient())
  const [ theme, setTheme ] = useState(themes.light)

  const toggleTheme = () => {
    const invertedTheme = theme === themes.light
      ? themes.dark : themes.light

    setTheme(invertedTheme)
  }

  return (
    <WagmiConfig client={client}>
      <ThemeProvider theme={{ ...theme, mobile }}>
        <StyleSheet />
        <NavigationBar
          className='navigation-bar' onClick={toggleTheme}
        />
        <Container className='container-main'>
          <Profile />
        </Container>
      </ThemeProvider>
    </WagmiConfig>
  );
}

export default App
