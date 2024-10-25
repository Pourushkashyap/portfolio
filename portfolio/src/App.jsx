import { useState } from 'react'

import './App.css'
import Header from './component/Header.jsx'

// import { Outlet } from 'react-router-dom'
import Home from './component/Home.jsx'
import Sociallinks from './component/Sociallinks.jsx'
import About from './component/About.jsx'
import Portfolio from './component/Portfolio.jsx'
import Experience from './component/Experience.jsx'
import Contact from './component/Contact.jsx'
import Connection from './component/Connection.jsx'

function App() {


  return (
    <>
    <Header/>
   <Home/>
   <Connection/>
   <Sociallinks/>
   
   <About/>
   <Portfolio/>
   <Experience/>
   <Contact/>
    </>
  )
}

export default App
