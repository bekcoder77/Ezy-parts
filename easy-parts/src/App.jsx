import { useState } from 'react'
import './App.css'
import Stars from './components/Stars'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    {/* <Footer/> */}
    </>
  )
}

export default App
