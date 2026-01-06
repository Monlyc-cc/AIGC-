import React, { useState } from 'react'
import '../styles/login.less'
export default function login() {
  const [loading, setLoding] = useState(false)
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [err1,seterr1]=useState('')
  const [err2,seterr2]=useState('')

  const handleSubmit = (e) => {
    e.preventDefault()//阻止默认行为
    setLoding(true)
    //校验账号格式
    const phonereg = /^1[3-9]\d{9}$/
    const emailreg = /^[1-9]\d{4,10}@qq\.com$/
    if (!phonereg.test(phone) && !emailreg.test(phone)) {
      seterr1('账号或邮箱格式错误')
    }
    setTimeout(() => {
      setLoding(false)
    }, 2000);
  }
  return (
    <form className='auth-form' onSubmit={handleSubmit} >
      <div className="auth-form__group">
        <i className='iconfont icon-zhanghao'></i>
        <input type="tel" value={phone} placeholder='请输入手机号或邮箱' className='auth-form__input' onChange={(e) => {
          setPhone(e.target.value)
        }} />
      </div>
      <div className='err'>{err1}</div>
      <div className="auth-form__group">
        <i className='iconfont icon-mima'></i>
        <input type="password" onChange={(e) => {
          setPassword(e.target.value)
        }} value={password} placeholder='请输入密码' className='auth-form__input' />
      </div>
      <div className='err'>{err2}</div>
      <div className="auth-form__forgot-wrapper">
        <a href="#" className='auth-form__forget'>忘记密码?</a>
      </div>
      <button disabled={loading} type='submit' className='auth-form__submit'>{loading ? '登录中...' : '登录'}</button>
    </form>
  )
}
