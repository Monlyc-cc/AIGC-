import React, { useRef } from 'react'
import {useNavigate} from 'react-router-dom'
import './login.css'
export default function Login() {
    const  navigate= useNavigate()
    function login()
    {
        navigate('/home?id=123')
    }
    return (
        <div className='login'>
            <div className="login-container">
                <h2>后台管理系统</h2>
                <div className="item">
                    <label htmlFor="">账号：</label>
                    <input type="text" />
                </div>

                <div className="item">
                    <label htmlFor="">密码：</label>
                    <input type="text" />
                </div>

                <div className="item">
                    <button onClick={login}>登录</button>
                </div>
            </div>
        </div>
    )
}
