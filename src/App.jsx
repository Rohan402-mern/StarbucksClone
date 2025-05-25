import { useState } from 'react'
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'
import './App.css'
import Dashboard from './Pages/Dashboard'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Gift from './Pages/Gift'
import Profile from './Pages/Profile'
import HelpCenter from './Pages/HelpCenter'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='*' element={<div><h1>404 NOT FOUND</h1></div>}  />
      <Route path='/giftcards' element={<Gift/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/profile/help-center' element={<HelpCenter/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
