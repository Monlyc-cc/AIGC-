import React from 'react'
import '../styles/aiPage.less'
import { useNavigate } from 'react-router-dom'

export default function AIPage() {
  const navigate=useNavigate()
  return (
    <div className='ai-page-root'>
      <header className='ai-page-header'>
        <h1>AI小伙伴</h1>
        <p>让 AI 陪伴孩子成长</p>
      </header>

      <section className='ai-page-content'>
        <div onClick={()=>{
          navigate('/ai-chat')
        }} className="ai-feature-card">
          <i className="iconfont icon-robot-2-fill ai-feature-icon "></i>
          <h3>智能对话</h3>
          <p>AI陪孩子聊天，解答各种问题</p>
        </div>
        <div className="ai-feature-card">
          <i className="iconfont icon-book ai-feature-icon "></i>
          <h3>作业辅导</h3>
          <p>AI陪孩子聊天，解答各种问题</p>
        </div>
        <div className="ai-feature-card">
          <i className="iconfont icon-a-MATE_huaban1fuben110 ai-feature-icon "></i>
          <h3>语音通话</h3>
          <p>AI陪孩子聊天，解答各种问题</p>
        </div>
      </section>

    </div>
  )
}