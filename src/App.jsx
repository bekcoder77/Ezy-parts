import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Toyoto from './pages/Toyoto'
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Kompleks from './pages/Kompleks'
import Servis from './pages/Servis'
import Info from './pages/Info'

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
       <Route path='/servis' element={<Servis/>}/>
       <Route path='/info' element={<Info/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
