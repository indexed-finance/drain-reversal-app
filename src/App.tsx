import React, { useState } from 'react'

import { ThemeProvider } from 'styled-components'
import { WagmiConfig } from 'wagmi'

import Container from './elements/container'
import Button from './elements/button'

import { Profile } from './components/Profile'

import themes from './styles/themes'
import { client } from './config'

function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <WagmiConfig client={client}>
        <Container
          margin='calc(20vh - 5em) 25%'
          height='calc(50vh - 10em)'
          padding='5em 3em'
        >
          <Profile />
        </Container>
      </WagmiConfig>
    </ThemeProvider>
  );
}

export default App
