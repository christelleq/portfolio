import React from 'react'
import { Route, Routes } from 'react-router-dom'

import About from './About'
import Education from './Education'
import Header from './Header'
import Home from './Home'
import Links from './Links/Links'
import Nav from './Nav'
import Projects from './Projects'


function App() {
    return (
        <>
        <Header/>
        <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/education" element={<Education/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
        <Links/>
        </>
    )
  }
  
  export default App