import React from 'react'
import Qrgenrator from './Projects/qrgenrator'
import Footer from './Projects/footer'
import ReactToastify from './Projects/reactToastify'
import MusicPlayer from './Projects/musicPlayer'
import StopWatch from './Projects/stopWatch'

import './App.css'

function App() {

  return (
    <>
      <Qrgenrator />
      <ReactToastify />
      <MusicPlayer />
      <StopWatch />
      <Footer />
    </>
  )
}

export default App
