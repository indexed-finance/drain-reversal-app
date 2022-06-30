import React from 'react';
import './App.css';
import { WagmiConfig } from 'wagmi';
import { client } from './config';
import { Profile } from './components/Profile';

function App() {
  return (
    <WagmiConfig client={client}>
      <Profile />
    </WagmiConfig>
  );
}

export default App;
