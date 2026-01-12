import React, { useState } from 'react'
import '../styles/login.less'
import { Toast } from 'antd-mobile'
import axios from '../http'
import { useNavigate} from 'react-router-dom'
export default function login() {
  const [loading, setLoding] = useState(false)
  const [account, setAccount] = useState('18970173593')
  const [password, setPassword] = useState('123')
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault()//阻止默认行为
    setLoding(true)
    //校验账号格式
    const phonereg = /^1[3-9]\d{9}$/
    const emailreg = /^[1-9]\d{4,10}@qq\.com$/

    if (!phonereg.test(account) && !emailreg.test(account)) {
      Toast.show({
        icon: 'fail',
        content: '请输入正确的账号'
      })
      setLoding(false)
      return;
    }

    Toast.show({
      icon: 'loading',
      content: '登录中'
    })

    // 像后端发请求
    const url = '/api/auth/login';
    
      const res = await axios.post(url,{
      account,
      password
    })
    const data=res .data;
    console.log(data)
    localStorage.setItem('token',data.token)

    // const res = await fetch(url, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },// 请求头是对象
    //   body: JSON.stringify({ account, password }) //请求体必须是字符串
    // })
    // const data = await res.json()

    if (data.token) {
      Toast.show({
        icon: 'success',
        content: '登录成功'
      })
    }
    else {
      Toast.show({
        icon: 'fail',
        content: '账户或密码错误'
      })
    }
    setLoding(false)
    navigate('/home')

  }
  return (
    <form className='auth-form' onSubmit={handleSubmit} >
      <div className="auth-form__group">
        <i className='iconfont icon-zhanghao'></i>
        <input type="tel" value={account} placeholder='请输入手机号或邮箱' className='auth-form__input' onChange={(e) => {
          setAccount(e.target.value)
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
