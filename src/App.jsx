import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Dashboard from './Pages/Dashboard'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='*' element={<div><h1>404 NOT FOUND</h1></div>}  />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
