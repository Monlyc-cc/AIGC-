import React from 'react'
import { BrowserRouter, Routes, Route,Navigate, Router} from 'react-router-dom'
import './utils/rem.js'
import Login from './pages/Login.jsx'

import './styles/app.less'
const AuthPage=()=>{
    return (
      <div className='app-root'>
        <div className="cartoon-bg"></div>
        <Login/>
      </div>
    )
}
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to={'/login'}/>}></Route>
        <Route path='/login' element={<AuthPage />}></Route>
      </Routes>
    </BrowserRouter>

  )
}
