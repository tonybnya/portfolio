import { useState } from 'react'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Progression from './components/Progression'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Intro />
      <Projects />
      <Progression />
      <Contact />
      <Footer />
    </>
  )
}

export default App
