import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, Router } from 'react-router-dom'
import './utils/rem.js'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import ResetPassword from './pages/ResetPassword.jsx'
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import AI from './pages/AI.jsx'
import Mine from './pages/Mine.jsx'
import './styles/app.less'
import Recognition from './pages/Recognition.jsx'
import LearnPoem from './pages/LearnPoem.jsx'
import AccountSetting from './pages/AccountSetting.jsx'
const AuthPage = () => {
  const [flag, setFlag] = useState(true)
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const register_to_login = (flag, account, password) => {
    setFlag(flag)
    setAccount(account)
    setPassword(password)
  }
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
            <div className={`slider-button ${flag ? '' : 'slider-button--right'}`}></div>
            <div className="slider-tabs">
              <button className='slider-tab' style={{ 'color': flag ? '#fff' : '#666' }} onClick={() => {
                setFlag(true)
              }}>登录</button>
              <button className='slider-tab' style={{ 'color': flag ? '#666' : '#fff' }} onClick={() => {
                setFlag(false)
              }}>注册</button>
            </div>
          </div>
          {/*登录模块*/}
          {flag ? <Login user={{
            account,
            password
          }} /> : <Register register_to_login={register_to_login} />}
          <div className="social-login">
            <div className="divider">
              <div className="divider-line"></div>
              <div className="divider-test">第三方账号登录</div>
              <div className="divider-line"></div>
            </div>
            <div className="oauth-buttons">
              <button className="oauth-button__btn">
                <i className='iconfont icon-weixin'></i>
              </button>
              <button className="oauth-button__btn">
                <i className='iconfont icon-pingguo'></i>
              </button>
              <button className="oauth-button__btn">
                <i className='iconfont icon-QQ'></i>
              </button>
            </div>
          </div>
          <div className="auth-footnote">
            <p>表示您同意<a href="#">《用户协议》</a>和<a href="#">《隐私政策》</a></p>
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
        <Route path='' element={<Navigate to='login' replace />}></Route>
        <Route path='login' element={<AuthPage />}></Route>
        <Route path='RsetPassword' element={<ResetPassword />}></Route>
        <Route path='layout' element={<Layout />}>
          <Route path='' element={<Navigate to='home' />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='ai' element={<AI />}></Route>
          <Route path='mine' element={<Mine />}></Route>
          <Route path='recognition' element={<Recognition />}></Route>
          <Route path='learn-words' element={<LearnPoem/>}></Route>
        </Route>
        <Route path='account-setting' element={<AccountSetting />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
