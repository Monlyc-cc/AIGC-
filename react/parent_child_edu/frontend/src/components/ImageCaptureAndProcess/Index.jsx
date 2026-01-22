import React, { useEffect, useRef } from 'react'
import './index.less'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { CenterPopup, Popup, Image } from 'antd-mobile'
import MyWebcam from '../MyWebcam'
export default function Index({
  theme = 'default',
  onRecongnition,
  children,
  title,
}) {


  const [slectedImage, setSlectedImage] = useState(null)
  const navigate = useNavigate()
  const inputRef = useRef(null)
  const [visible, setVisible] = useState(false)

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
      const dataUrl = await new Promise((resolve, reject) => {
        const reader = new FileReader(); // 浏览器原生对象，自带的
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (err) => reject(err)
      });
      // 将url 传入
      setSlectedImage(dataUrl)
      console.log(dataUrl);




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


  // 设置action： 拍照
  const handleTakePhoto = () => {
    console.log('打开');
    setVisible(true)
  }
  useEffect(() => {
    if (slectedImage!=null) {
      (async () => {
        // ai 识别
        const res = await onRecongnition(slectedImage)
        console.log(res);
        
      })()
    }
  }, [slectedImage])
  return (
    <div className='image-capture-root'>
      <header className='image-capture-header'>
        <button onClick={() => { navigate('..') }} className='image-capture-header__back'>
          <i className='iconfont icon-fanhui'></i>
        </button>
        <h1>{title}</h1>
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
                <Image src={slectedImage} className='image-capture-preview__image' />
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
            onClick={handleTakePhoto}
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
      <Popup position='right'
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}>
        <div style={{
          width: '100vw',
          height: '100vh',
        }}>
          <MyWebcam
            back={() => {
              setVisible(false)
            }}
            setSlectedImage={setSlectedImage}
          ></MyWebcam>
        </div>
      </Popup>
    </div>
  )
}
