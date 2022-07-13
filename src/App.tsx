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
    <ThemeProvider theme={{ ...theme, mobile }}>
      <WagmiConfig client={client}>
        <Navigation { ...theme.rwd[`${mobile}`].navigation }>
          <h3> DRAIN REVERSAL </h3>
          <Button
            float='right'
            onClick={toggleTheme}
          >
            Dark / Light
          </Button>
        </Navigation>
        <Container
          margin='calc(27.5vh - 7.5em) 10%'
          height='calc(75vh - 10em)'
          padding='5em 2em'
          fontSize='1.5em'
          width='auto'
        >
          <Profile />
        </Container>
      </WagmiConfig>
    </ThemeProvider>
  );
}

export default App
