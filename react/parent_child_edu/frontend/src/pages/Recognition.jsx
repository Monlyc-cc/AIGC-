import React from 'react'
import ImageCaptureAndProcess from '../components/ImageCaptureAndProcess'
import axios from 'axios'
import { Toast } from 'antd-mobile';
import { useState } from 'react';
import RecognitionResult from '../components/recognitionResult/RecognitionResult'

export default function Recognition() {
    const [recognitionResult, setRecognitionResult] = useState(null)
    const RealonRecongnition = async (file) => {
        //http 请求只能传输字符/字节
        //File 对象不能序列化 → 先转 Base64（二进制→纯字符串，编码过程）
        try {
            const dataUrl = await new Promise((resolve, reject) => {
                const reader = new FileReader(); // 浏览器原生对象，自带的
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = (err) => reject(err)
            });

            //提示用户 ai 识别中
            Toast.show(
                {
                    content: 'AI识别中',
                    icon: 'loading',
                    duration: 0,
                    maskClickable: false
                }
            )


            const url = '/api/coze/recognition'
            //向工作流发请求， 因为前端直接向后端发请求，会导致跨域问题，只能有自己的后端对外部API进行访问
            const res = await axios.post(url, {
                "img": dataUrl
            })

            //卸载原组件子组件状态
            setRecognitionResult(null)
            setRecognitionResult(res.data.data)
            // 关闭所有弹框
            Toast.clear()

        } catch (err) {
            //失败提示
            Toast.show({
                content: err.message,
                duration: 2000,
                icon: 'fail'
            })
        }

    }
    return (
        <ImageCaptureAndProcess onRecongnition={RealonRecongnition}  >
            {recognitionResult && < RecognitionResult recognitionResult={recognitionResult}></ RecognitionResult>}
        </ImageCaptureAndProcess>
    )
}
