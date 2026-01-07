import React, { useState } from 'react'
import '../styles/login.less'
import {Toast}from 'antd-mobile'
export default function login() {
  const [loading, setLoding] = useState(false)
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit =async(e) => {
    e.preventDefault()//阻止默认行为
    setLoding(true)
    //校验账号格式
    const phonereg = /^1[3-9]\d{9}$/
    const emailreg = /^[1-9]\d{4,10}@qq\.com$/
 
    if (!phonereg.test(phone) && !emailreg.test(phone)) {
      Toast.show({
        icon:'fail',
        content:'请输入正确的账号'
      })
    }

    // 像后端发请求
    const url='http://localhost:3000/auth/login';
    const res=await fetch(url,{
      method:'POST',
      headers:{'Content-Type':'application/json'},// 请求头是对象
      body:JSON.stringify({phone,password}) //请求体必须是字符串
    })
    const data=await res.json()
    console.log(data)
  }
  return (
    <form className='auth-form' onSubmit={handleSubmit} >
      <div className="auth-form__group">
        <i className='iconfont icon-zhanghao'></i>
        <input type="tel" value={phone} placeholder='请输入手机号或邮箱' className='auth-form__input' onChange={(e) => {
          setPhone(e.target.value)
        }} />
      </div>
      <div className="auth-form__group">
        <i className='iconfont icon-mima'></i>
        <input type="password" onChange={(e) => {
          setPassword(e.target.value)
        }} value={password} placeholder='请输入密码' className='auth-form__input' />
      </div>
      <div className="auth-form__forgot-wrapper">
        <a href="#" className='auth-form__forget'>忘记密码?</a>
      </div>
      <button disabled={loading} type='submit' className='auth-form__submit'>{loading ? '登录中...' : '登录'}</button>
    </form>
  )
}
