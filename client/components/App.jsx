import React from 'react'
import { Route, Routes } from 'react-router-dom'

import About from './About'
import Education from './Education/Education'
import Header from './Header'
import Home from './Home'
import Links from './Links/Links'
import Nav from './Nav'
import Projects from './Projects/Projects'


function App() {
    return (
        <main className="h-screen flex flex-col justify-content-center text-center items-center">
            <Header/>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/education" element={<Education/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
            <Links/>
        </main>
    )
  }
  
  export default App