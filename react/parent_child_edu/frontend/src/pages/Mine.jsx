import React, { useState, useRef } from 'react'
import '../styles/minePage.less'
import { useNavigate } from 'react-router-dom'
import { Card, List, ActionSheet } from 'antd-mobile'
export default function Mine() {
  const r = useRef(null)
  const navigate=useNavigate()
  const actions = [
    {
      text: '退出登录', key: 'copy', onClick: () => {
        console.log('hajimi')
        navigate('../../login')
        r.current.close()
      }
    },
  ]

  const handleLogout = () => {
    r.current = ActionSheet.show({
      actions,
      cancelText: '取消',
    })
  }

  return (
    <div className='mine-page-root'>
      <header className='mine-page-header'>
        <div className='user-info'>
          <div className="user-avatar">
            <i className='iconfont icon-zhanghao'></i>
          </div>
          <div className="user-details">
            <h2>用户昵称</h2>
            <p>亲子教育 AI 助手</p>
          </div>
        </div>
      </header>
      <div className='mine-page-content'>
        <Card title={'我的内容'} className='mine-page-card'>
          <List style={{
            "--border-bottom": 'none',
            "--border-top": 'none',
          }}>
            <List.Item prefix={<i className='iconfont icon-shoucang2'></i>} onClick={() => { }}>
              我的收藏
            </List.Item>
            <List.Item prefix={<i className='iconfont icon-lishi'></i>} onClick={() => { }}>
              调查历史
            </List.Item>
          </List>
        </Card>
        <Card title={'设置'} className='mine-page-card'>
          <List style={{
            "--border-bottom": 'none',
            "--border-top": 'none',
          }}>
            <List.Item prefix={<i className='iconfont icon-shezhi'></i>} onClick={() => {navigate('/account-setting')}}>
              账号设置
            </List.Item>
            <List.Item prefix={<i className='iconfont icon-tongzhi'></i>} onClick={() => { }}>
              通知设置
            </List.Item>
            <List.Item prefix={<i className='iconfont icon-bangzhuzhongxin'></i>} onClick={() => { }}>
              帮助中心
            </List.Item>
            <List.Item prefix={<i className='iconfont icon-tuichudenglu'></i>} onClick={handleLogout}>
              退出登录
            </List.Item>
          </List>
        </Card>

      </div>

    </div>
  )
}
