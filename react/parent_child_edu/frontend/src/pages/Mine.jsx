import React, { useState, useRef } from 'react'
import '../styles/minePage.less'
import { useNavigate } from 'react-router-dom'
import { Card, List, ActionSheet, Popup } from 'antd-mobile'
import AccountSettingPage from './AccountSettingPages/AccountSettingPage.jsx'
export default function Mine() {
  const [visibleCloseRight, setVisibleCloseRight] = useState(false)
  const r = useRef(null)
  const navigate = useNavigate()
  const actions = [
    {
      text: '退出登录', key: 'copy', onClick: () => {

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

  const Cards = [
    {
      title: '我的内容',
      items: [
        { name: '我的收藏', icon: 'icon-shoucang2', handle: () => { } },
        { name: '调查历史', icon: 'icon-lishi', handle: () => { } }
      ]
    },
    {
      title: '设置',
      items: [
        { name: '账号设置', icon: 'icon-shezhi', handle: () => { setVisibleCloseRight(true) } },
        { name: '通知中心', icon: 'icon-tongzhi', handle: () => { } },
        { name: '帮助中心', icon: 'icon-bangzhuzhongxin', handle: () => { } },
        { name: '退出登录', icon: 'icon-tuichudenglu', handle: handleLogout },
      ]
    }
  ]


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
        {
          Cards.map((card, index) => {
            return (
              <Card key={index} title={card.title} className='mine-page-card'>
                <List style={{
                  "--border-bottom": 'none',
                  "--border-top": 'none',
                }}>
                  {
                    card.items.map((item, index) => {
                      return (
                        <List.Item
                          key={index}
                          prefix={<i className={`iconfont ${item.icon}`}></i>}
                          onClick={item.handle}
                        >{item.name}</List.Item>
                      )
                    })
                  }
                </List>
              </Card>
            )
          })
        }
        <Popup
          position='right'
          visible={visibleCloseRight}
          onClose={() => {
            setVisibleCloseRight(false)
          }}
        >
          <div style={{ width: '100vw' }}>
            <AccountSettingPage  back={()=>{setVisibleCloseRight(false)}}/>
          </div>
        </Popup>
      </div>

    </div >
  )
}
