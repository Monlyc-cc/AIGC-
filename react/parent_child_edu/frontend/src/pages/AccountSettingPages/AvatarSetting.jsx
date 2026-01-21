import React, { useRef, useState } from 'react'
import { CloseOutline, MoreOutline, } from 'antd-mobile-icons'
import { NavBar, Avatar, ActionSheet, Toast, Popup, Button } from 'antd-mobile'
import axios from '../../http'

export default function AvatarSetting({ back, previewAvatar, setPreviewAvatar }) {
    const [preview, setPreview] = useState(previewAvatar)
    const refAC = useRef()
    const [visible, setVisible] = useState(false)
    const fileInputRef = useRef()
    const actions = [{
        text: '从相册选择',
        onClick: () => {
            fileInputRef.current.click()
            refAC.current.close()
        }

    }]
    const handleImageSelect = async (e) => {

        const file = e.target.files[0]
        if (file) {
            const dataUrl = await new Promise((resolve, reject) => {
                const reader = new FileReader(); // 浏览器原生对象，自带的
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = (err) => reject(err)
            });
            setPreview(dataUrl)
            setVisible(true)
        }
        fileInputRef.current.value = null

    }
    const updateAvatar = async () => {
        let ref;
        setVisible(false)


        try {
            //限制图片大小 2mb
            if (preview.length > 1 * 1024 * 1024) {
                console.log('请求准备');

                Toast.show({

                    icon: 'fail',
                    content: '图片不能超过1MB',
                })
                return
            }
            ref = Toast.show({
                icon: 'loading',
                content: '正在上传头像',
                duration: 0,
                container: document.body// 提高层级
            })

            console.log('请求准备');

            const url = '/api/mine/updateAvatar'
            const res = await axios.post(url, {
                avatar: preview,
            })
            console.log(res.data);
            if (res?.data.code) {
                setPreviewAvatar(preview)
                ref?.close()
                Toast.show({
                    icon: 'success',
                    content: '上传成功',
                    container: document.body
                })
                setPreview(preview)
            }

        }
        catch (error) {
            ref?.close()
            Toast.show(
                {
                    icon: 'fail',
                    content: '上传失败',
                    container: document.body
                }
            )
        }
    }
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh'
        }}>
            <NavBar right={<MoreOutline onClick={() => {
                refAC.current = ActionSheet.show({
                    cancelText: '取消',
                    actions,
                })
            }} style={{ fontSize: '30px' }}></MoreOutline>} onBack={back}>头像</NavBar>

            <div style={{
                flex: '1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{
                    maxWidth: '400px',
                    width: '100vw',
                    backgroundColor: '#000'
                }}>
                    <Avatar style={{
                        width: '100%',
                        height: '100%'
                    }} src={previewAvatar || ''} />
                </div>
            </div>
            <Popup
                key={'1'}
                visible={visible}
                position='right'
                onClose={() => {
                    setVisible(false)
                }}

            >
                <div style={{
                    minWidth: '100vw',
                    height: '100vh',
                    boxSizing: 'border-box',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div style={{
                        padding: '10px',
                        maxWidth: '300px',
                        width: '100%'
                    }} >
                        <Avatar style={{
                            width: '100%',
                            height: '100%'
                        }} src={preview || ''}></Avatar>
                    </div>

                    <div style={{
                        position: 'fixed',
                        width: '100%',
                        bottom: 0,
                        height: '100px',
                        padding: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        boxSizing: 'border-box'
                    }}>
                        <Button
                            onClick={() => {
                                setVisible(false)
                            }}
                            color='primary'
                            fill='none'>
                            取消
                        </Button>
                        <Button
                            color='primary'
                            fill='solid'
                            onClick={updateAvatar}>
                            确定
                        </Button>
                    </div>


                </div>
            </Popup >
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                style={{ display: 'none' }}
            />
        </div >

    )
}
