import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, Router } from 'react-router-dom'
import './utils/rem.js'
import Login from './pages/Login.jsx'

import './styles/app.less'
const AuthPage = () => {
  const [flag, setFlag] = useState(false)
  return (
    <div className='app-root'>
      <div className="cartoon-bg"></div>
      <div className="auth-card">
        <div className="auth-card-wrapper">
          <div className="auth-header">
            <div className="auth-logo">logo</div>
            <h1 className="auth-title">亲自教育 · 成长伴侣</h1>
            <p className="auth-subtitle">专注于 0-12 亲子教育</p>
          </div>
          <div className="slider-container">
            <div className={`slider-button ${flag ? 'slider-button--right' : ''}`}></div>
            <div className="slider-tabs">
              <button className='slider-tab' style={{ 'color': flag ? '#666' : '#fff' }} onClick={() => {
                setFlag(false)
              }}>登录</button>
              <button className='slider-tab' style={{ 'color': flag ? '#fff' : '#666' }} onClick={() => {
                setFlag(true)
              }}>注册</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to={'/login'} />}></Route>
        <Route path='/login' element={<AuthPage />}></Route>
      </Routes>
    </BrowserRouter>

  )
}
