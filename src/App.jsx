import React from 'react'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Progression from './components/Progression'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className='container mx-auto px-4 max-sm:px-6'>
      <Intro />
      <hr className='border-2 mb-8'/>
      <Projects />
      <Progression />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
