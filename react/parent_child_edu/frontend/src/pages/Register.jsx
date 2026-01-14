import React, { useEffect, useState } from 'react'
import '../styles/register.less'
import axios from '../http'
import { Loading, Toast } from 'antd-mobile'
export default function Register({register_to_login}) {
  const [nickname, setNickname] = useState('')
  const [account, setAccount] = useState('')
  const [captchaCode, setCaptchaCode] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoding] = useState(false)
  const [captchaId, setCaptchaId] = useState('')
  const [captchaSvg, setCaptchaSvg] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()//阻止默认行为

    //判断注册信息是否完整
    if (!nickname || !account || !password || !captchaCode) {
      Toast.show({
        icon: 'fail',
        content: '请输入完整信息'
      })
      return
    }
    // 校验格式
    const phonereg = /^1[3-9]\d{9}$/
    const emailreg = /^[1-9]\d{4,10}@qq\.com$/

    if (!phonereg.test(account) && !emailreg.test(account)) {
      Toast.show({
        icon: 'fail',
        content: '账号格式错误'
      })
      return;
    }

    setLoding(true)

    // 提示用户注册中，请耐心等待
    Toast.show(
      {
        icon: 'loading',
        content: '注册中'
      }
    )
    //向后端发请求
    const url = '/api/auth/register'
    const res = await axios.post(url, {
      captchaId,
      nickname,
      account,
      password,
      captchaCode,

    })
    // 
    if(res)
    {
      Toast.show({
        icon:"success",
        content:'注册成功'
      })

      register_to_login(true,account,password)

    }
    console.log(res);

    setLoding(false)
  }
  async function loadCaptcha() {
    const url = '/api/auth/captcha'
    const res = await axios.get(url)
    setCaptchaId(res.data.captchaId)
    setCaptchaSvg(res.data.captchaSvg)

  }
  useEffect(() => {
    loadCaptcha()
  }, [])
  return (
    <div>
      <form className='register-form' onSubmit={handleSubmit}>
        <div className="register-form__group">
          <i className='iconfont icon-zhanghao'></i>
          <input
            type="text"
            placeholder='请输入昵称'
            className='register-form__input'
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value)
            }}
          />
        </div>
        <div className="register-form__group">
          <i className='iconfont icon-lujingbeifen3'></i>
          <input
            type="text"
            placeholder='请输入手机号或邮箱'
            className='register-form__input'
            value={account}
            onChange={(e) => {
              setAccount(e.target.value)
            }}
          />
        </div>
        <div className="register-form__group register-form__group--captcha">
          <i className='iconfont icon-yanzhengma'></i>
          <input
            type="text"
            placeholder='请输入验证码'
            className='register-form__input register-form__input--captcha'
            value={captchaCode}
            onChange={(e) => {
              setCaptchaCode(e.target.value)
            }}
            maxLength={4}
          />
          <div
            onClick={() => {
              loadCaptcha()
            }}
            className="register-form__captcha-img"
            title='点击刷新验证码'
            dangerouslySetInnerHTML={{ __html: captchaSvg }}
          ></div>
        </div>
        <div className="register-form__group">
          <i className='iconfont icon-mima'></i>
          <input
            type="password"
            placeholder='请设置密码'
            className='register-form__input'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </div>
        <button disabled={loading} type='submit' className='register-form__submit'>{loading ? '注册中...' : '注册'}</button>
      </form>
    </div>
  )
}