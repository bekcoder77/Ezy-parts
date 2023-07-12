import { useState } from 'react'
import './App.css'
import Stars from './components/Stars'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Toyoto from './pages/Toyoto'
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Kompleks from './pages/Kompleks'
 

function App() {

  return (
    <div className='App'>
    <BrowserRouter>
    
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/toyoto' element={<Toyoto/>}/>
    <Route path='/catalog' element={<Catalog/>}/>
    <Route path='/kompleks' element={<Kompleks/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
