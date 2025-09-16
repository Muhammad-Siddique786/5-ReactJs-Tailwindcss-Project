import React from 'react'
import Qrgenrator from './Projects/qrgenrator'
import Footer from './Projects/footer'
import ReactToastify from './Projects/reactToastify'
import MusicPlayer from './Projects/musicPlayer'
import StopWatch from './Projects/stopWatch'
import Calculator from './Projects/calculator'

import './App.css'

function App() {

  return (
    <>
      <Qrgenrator />
      <ReactToastify />
      <MusicPlayer />
      <StopWatch />
      <Calculator />
      <Footer />
    </>
  )
}

export default App
