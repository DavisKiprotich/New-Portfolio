import React from 'react'

import { About, Footer, Header, Work, Skills, Tech, Contact, Experience } from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => {
  return (
    <div className='app'> 
      <Navbar />
      <Header />
      <About/>
      <Skills />
      <Tech />
      <Experience />
      <Work />
      <Contact /> 
      <Footer />       
    </div>
  )
}

export default App;