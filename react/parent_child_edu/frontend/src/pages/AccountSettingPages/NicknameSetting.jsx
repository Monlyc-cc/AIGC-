import React, { useRef, useState } from 'react'
import { CloseOutline, MoreOutline, } from 'antd-mobile-icons'
import { NavBar, Avatar, ActionSheet, Toast, Popup, Button, Input } from 'antd-mobile'
import axios from '../../http'

export default function NicknameSetting({ back, setNickname, nickname }) {
  const [preview, setPreview] = useState(nickname)
  const updateNickname = async () => {
    // 向后端发请求 
    const url = '/api/mine/updateNickname'
    Toast.show({
      icon: 'loading',
      content: '更新中...',
      duration: 1000
    })
    const res = await axios.post(url, {
      nickname: preview
    })

    console.log(res);
    if (res?.data?.code) {
      Toast.show({
        icon: 'success',
        content: '更新成功'
      })
    }

    setNickname(preview)
    back()
    // 请求成功则保存 展示给用户
  }
  return (
    <div>
      <NavBar right={<Button
        loading='auto'
        onClick={updateNickname}
        color='success'
        fill='solid'
        size='small'
      >保存</Button>} onBack={() => {
        setPreview(nickname)
        back()
      }}>更改名字</NavBar>

      <Input
        placeholder='请输入内容'
        value={preview}
        onChange={val => {
          setPreview(val)
        }}
      ></Input>

    </div>
  )
}
