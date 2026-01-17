import React, { useRef } from 'react'
import './index.less'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

export default function Index({
  theme = 'default',
  onRecongnition,
  recognitionResult,
  children
}) {


  const [slectedImage, setSlectedImage] = useState(null)
  const navigate = useNavigate()
  const inputRef = useRef(null)

  // 清除图片预览
  const handleClear = () => {
    setSlectedImage(null)
    inputRef.current.value = null
  }
  // 本地上传图片并预览
  const handleImageUpload = async (e) => {

    const file = e.target.files[0]
    if (file) {
      //将file 对象转换为url
      const imageUrl = URL.createObjectURL(file)
      // 将url 传入
      setSlectedImage(imageUrl)
      // ai 识别
      const res = await onRecongnition(file)


    }
  }
  // 主题颜色配置
  const themeConfig = {
    default: {
      primary: '#ff7a45',
      secondary: '#f5f5f5',
      loading: '#ff6b6b',
      voice: '#ffd166',
      gradient: ['#fef3e6', '#e6f7ff']
    },
    green: {
      primary: '#4caf50',
      secondary: '#f5f5f5',
      loading: '#4caf50',
      voice: '#4caf50',
      gradient: ['#e8f5e8', '#fff3e0']
    }
  };
  const currentTheme = themeConfig[theme] || themeConfig.default

  return (
    <div className='image-capture-root'>
      <header className='image-capture-header'>
        <button onClick={() => { navigate('..') }} className='image-capture-header__back'>
          <i className='iconfont icon-fanhui'></i>
        </button>
        <h1>AI 拍照识物</h1>
        <div className='image-capture-header__placeholder'></div>
      </header>
      <main className='image-capture-main'>
        <section className="image-capture-preview" style={{
          background: `radial-gradient(circle at 20% 20%, ${currentTheme.gradient[0]} 0, transparent 35%),
                      radial-gradient(circle at 90% 10%, ${currentTheme.gradient[1]} 0, transparent 40%),
                      #ffffff`
        }}>
          {
            slectedImage ? (
              <div className="image-capture-preview__image-container">
                <img src={slectedImage} className='image-capture-preview__image' />
                <button onClick={handleClear} className='image-capture-preview__clear'>
                  <i className='iconfont icon-close'></i>
                </button>
              </div>) : (
              <div className="image-capture-preview__placeholder">
                <i className='iconfont icon-image'></i>
                <p>点击下方按钮拍照或上传图片</p>
              </div>
            )

          }
        </section>
        <section className='image-capture-actions'>
          <button
            className='image-capture-btn image-capture-btn--primary'
            style={{ backgroundColor: currentTheme.primary }}
          >
            <i className='iconfont icon-xiangji'></i>
            拍照
          </button>
          <button onClick={() => { inputRef.current.click() }} className='image-capture-btn image-capture-btn--secondary'>
            <i className='iconfont icon-shangchuan'></i>
            上传照片
          </button>
          <input style={{
            display: 'none'
          }} type="file" accept='image/*' ref={inputRef} onChange={handleImageUpload} />
        </section>

        {
          (
            children
          )
        }
      </main>
    </div>
  )
}
