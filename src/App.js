import React from 'react'

import Header from './components/Header'
import PadInput from './components/PadInput'
import DesignBoard from './components/DesignBoard'

import './App.css'

function App() {
  return (
    <div className='App'>
       <div className='header'>
        <Header />
      </div>
      <div className='pad-container'>
        <PadInput />
      </div>
      <DesignBoard />
    </div>
  )
}

export default App
