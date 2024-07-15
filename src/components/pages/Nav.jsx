import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from '../auth/Login'
import Signup from '../auth/Signup'
import ComputerMoves from '../game/ComputerMoves'



function Nav() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/moves' element={<ComputerMoves />} />
        </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default Nav