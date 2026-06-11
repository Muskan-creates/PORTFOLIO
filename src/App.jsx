import React from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Muskan from './components/Muskan'
import About from './components/About'
import Education from "./components/Education";
import Skills from './components/Skills'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Muskan />
      <About />
      <Education/>
      <Skills/>
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App
