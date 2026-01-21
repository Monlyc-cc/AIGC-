import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { List, Avatar, NavBar, Popup } from 'antd-mobile'
import axios from '../../http'
import AvatarSetting from './AvatarSetting'
import NicknameSetting from './NicknameSetting'
import PasswordSetting from './PasswordSetting'
export default function AccountSettingPage({ back }) {
    const [user, setUser] = useState()
    const [preview, setPreview] = useState()
    const [nickname, setNickname] = useState()
    const [visible1, setVisible1] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const [visible3, setVisible3] = useState(false)
    const pops = [
        {
            reactNode: <NicknameSetting back={() => { setVisible2(false) }} setNickname={setNickname} nickname={nickname}></NicknameSetting>,
            visible: visible2,
            onclose: () => {
                setVisible2(false)
            },
        },
        {
            reactNode: <AvatarSetting setPreviewAvatar={setPreview} previewAvatar={preview || ''} back={() => { setVisible1(false) }}></AvatarSetting>,
            visible: visible1,
            onclose: () => {
                setVisible1(false)
            },
        },
        {
            reactNode: <PasswordSetting account={user?.account} back={() => { setVisible3(false) }}></PasswordSetting>,
            visible: visible3,
            onclose: () => {
                setVisible3(false)
            }
        }
    ]
    useEffect(() => {
        axios.get('/api/auth/info').then(res => {
            setUser(res.data)
            setPreview(res.data.avatar)
            setNickname(res.data.nickname)
            console.log(res.data)
        })
    }, [])

    return (
        <div>
            <NavBar onBack={back}>账户设置</NavBar>
            <section className='account--setting__section'>
                <List>
                    <List.Item onClick={() => { setVisible1(true) }} extra={<Avatar src={preview || ''} size={40} style={{ '--border-radius': '50%' }} />} >头像</List.Item>
                    <List.Item onClick={() => { setVisible2(true) }} extra={nickname || 'XXX'} clickable>昵称</List.Item>
                    <List.Item extra={user?.account || 'XXXXXX'} clickable>账号</List.Item>
                    <List.Item onClick={() => { setVisible3(true) }} clickable>修改密码</List.Item>
                </List>
            </section>
            {
                pops.map((item, index) => {
                    return (<Popup
                        key={index}
                        position='right'
                        visible={item.visible}
                        onClose={item.onclose}
                    >
                        <div style={{ width: '100vw' }}>
                            {item.reactNode}
                        </div>
                    </Popup>)
                })
            }


        </div>
    )
}
