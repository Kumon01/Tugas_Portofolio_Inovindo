  import { useState } from 'react'
  import React from 'react'
  import Profile from './Components/Profile'
  import Header from './Components/Header'
  import About from './Components/About'
  import Skills from './Components/Skills'
  import Portfolio from './Components/Portfolio'
  import Contact from './Components/Contact'

  import { Footer } from 'flowbite-react'



  function App() {
    const [count, setCount] = useState(0)

    return (
      <>
        <Header />
        <Profile />
        <About />
        <Skills/>
        <Portfolio />
        <Contact />
      </>  
    )
  }

  export default App
