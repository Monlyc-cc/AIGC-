import React, { useState } from 'react'
import '../styles/layout.less'
import { Outlet,useNavigate } from 'react-router-dom'

export default function Layout() {
    const [activeTab,setActiveTab]=useState('home')
    const navigate=useNavigate()
    //布局页面
    const tabs = [
        { id: 'home', name: '首页', icon: "icon-shouye",path:'home' },
        { id: 'ai', name: 'AI小伙伴', icon: "icon-bot" ,isHightLighted:true,path:'ai'},
        { id: 'mine', name: '我的', icon: "icon-wode",path:'mine' }
    ]

    return (
        <div className='layout'>
            <div className='layout-page'>
                <Outlet></Outlet>
            </div>
            <div className="bottom-nav">
                {
                    tabs.map((tab) => {
                        return (
                            <div onClick={()=>{
                                setActiveTab(tab.id)
                                navigate(`${tab.path}`)
                            }} key={tab.id} className={`bottom-nav__item ${tab.isHightLighted?'hightLighted':''} ${activeTab===tab.id?'active':''}` }> {/* ✅ 修正 buttom → bottom */}
                                <div className="bottom-nav__icon-container"> {/* ✅ 修正 */}
                                    <i className={`iconfont ${tab.icon}`} ></i>
                                </div>
                                <span className='bottom-nav__label'>{tab.name}</span> {/* ✅ 修正 */}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
