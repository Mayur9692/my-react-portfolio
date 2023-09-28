import React from 'react'

import { About, Footer, Header, Skills, Testimonials, Work } from './container'
import { Navbar } from './components/Navbar'
import './App.scss';
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
      {/* <Testimonials /> */}

    </div>
  )
}

export default App
