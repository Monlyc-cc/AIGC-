// src/App.jsx
import React, { useRef, useEffect, useState } from 'react';
// 导入安装好的 react-webcam@6.0.0
import Webcam from 'react-webcam';;
import { Button, NavBar, Popup, Image, } from 'antd-mobile'
function index({ back, setSlectedImage }) {
    const webcamRef = useRef(null);
    const [preview, setPreview] = useState('');
    const [visible, setVisible] = useState(false);
    // 关键：关闭 React 19 的严格模式（否则会重复执行 useEffect 导致流停止）
    // 注意：如果你的根组件有 <StrictMode>，先临时注释掉！
    return (

        <div style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <NavBar onBack={() => {
                back()
            }} style={{
                color: '#fff',
                backgroundColor: '#000'
            }}>相机</NavBar>
            <Webcam
                ref={webcamRef}
                audio={false}
                width={'100%'}
                screenshotFormat="image/jpeg"
                style={{

                    display: 'block',
                    flex: 1,
                    backgroundColor: '#000',
                    border: 'none'
                }}
                // React 19 必须加的属性
                autoPlay
                playsInline
                muted
                // 简化约束，适配所有设备
                videoConstraints={{ video: true }}
            >

            </Webcam >
            <div style={{
                backgroundColor: '#000',
                position: 'fixed',
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                bottom: 0,
                height: '100px'
            }}>
                <button
                    style={{
                        backgroundColor: '#000',
                        borderRadius: 0,
                        border: 'none'
                    }}
                    onClick={() => {
                        const imageUrl = webcamRef?.current?.getScreenshot();
                        console.log(imageUrl);
                        setPreview(imageUrl)
                        setVisible(true)
                    }}>
                    <i style={{
                        fontSize: '50px',
                        color: '#fff'
                    }} className='iconfont icon-xiangji'></i>
                </button>

            </div>
            <Popup
                visible={visible}
                onClose={() => setVisible(false)}
                showCloseButton
                position="right"
            >
                <div style={{
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '100px'
                }}>
                    <Image src={preview} alt="Preview" style={{ width: '100%' }} />
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '200px'
                    }}>
                        <Button onClick={() => {
                            setVisible(false)
                        }} fill='none'>取消</Button>
                        <Button onClick={() => {
                            setSlectedImage(preview)
                            setVisible(false)
                            back()
                        }} color='success'>确认</Button>
                    </div>
                </div>
            </Popup>
        </div>


    );
}

export default index;