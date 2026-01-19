import React, { useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { List,Avatar } from 'antd-mobile'
import axios from '../http'
export default function AccountSetting() {
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get('/api/auth/info').then(res=>{
            console.log(res.data)
            })
    })
    return (
        <div>
            <header className='image-capture-header'>
                <button onClick={() => { navigate(-1) }} className='image-capture-header__back'>
                    <i className='iconfont icon-fanhui'></i>
                </button>
                <h1>账号设置</h1>
                <div className='image-capture-header__placeholder'></div>
            </header>
            <section className='account--setting__section'>
                <List>
                    <List.Item clickable extra={<Avatar src={''} size={40} style={{'--border-radius':'50%'}} />}>头像</List.Item>
                    <List.Item extra={'XXX'} clickable>昵称</List.Item>
                    <List.Item extra={'XXXXXX'} clickable>账号</List.Item>
                    <List.Item clickable>修改密码</List.Item>
                </List>
            </section>
        </div>
    )
}
