import React, { useRef, useState } from 'react'
import '../styles/aiDialogue.less'
import { useNavigate } from 'react-router-dom'
import { Button, NavBar, DotLoading, Input, Toast } from 'antd-mobile'
import axios from '../http'


function handleMessages() {
    const messages = [
        {
            role: 'user',
            content: '你好',
            timeStamp: '2023-08-10 10:01:00',
            id: 2
        },
        {
            role: 'ai',
            content: '你好，我是智能对话助手，有什么我可以帮助你的吗？',
            timeStamp: '2023-08-10 10:00:00',
            id: 1
        }
    ]
    let id = 2;
    return {
        addMessage: (message) => {
            message.id = id + 1;
            messages.push(message)
            id++;
        },
        getMessages: () => {
            return messages
        },
        CreateMessage: (role, content, timeStamp) => {
            return {
                role,
                content,
                timeStamp: timeStamp.toLocaleString()
            }
        },
        flag: true
    }
}


export default function AIChat() {
    const navigate = useNavigate()

    const messageRef = useRef(handleMessages());
    const [flag, setFlag] = useState(0);
    const [isLoading, setIsLoading] = useState(false)
    const [isRecording, setIsRecording] = useState(false)

    const InputRef = useRef(null)
    //向后端请求deepseek的回复
    const handleSendMessage = async () => {
        //ref直接获得输入框的内容
        const content = InputRef.current.value.trim()
        if (!content) {
            // 内容为空则不继续后续逻辑
            return
        }
        // 内容不为空，则展示用户发送内容
        const message = messageRef.current.CreateMessage('user', content, new Date())
        messageRef.current.addMessage(message)
        setFlag(flag + 1)
        InputRef.current.value = ''




        const url = '/api/deepseek/chat'
        try {
            setIsLoading(true)
            const res = await axios.post(url, {
                message: content
            })
            setIsLoading(false)
            const aiResponse=messageRef.current.CreateMessage('ai', res.data.message, new Date())
            messageRef.current.addMessage(aiResponse)
            setFlag(flag + 1)
            console.log(res);

        } catch (err) {
            Toast.show({
                icon: 'fail',
                content: '前端请求失败' + err.message
            })
        }

    }
    return (
        <div className='ai-dialogue-root'>
            <div className='ai-dialogue-header'>
                <NavBar onBack={() => { navigate(-1) }} right={<i className='iconfont icon-gengduo'></i>}>智能对话</NavBar>
            </div>
            <div className="ai-dialogue-main">
                <div className="ai-dialogue-messages">
                    {/*欢迎*/}
                    {
                        messageRef.current.flag && (
                            <div className="ai-dialogue-welcome">
                                <i className='iconfont icon-robot-2-fill ai-dialogue-avatar'></i>
                                <p>你好，我是智能对话助手，有什么我可以帮助你的吗？</p>
                            </div>
                        )
                    }
                    {/*用户消息*/}
                    {
                        messageRef.current.getMessages().map(message => (
                            <div className={`ai-dialogue-message ${message.role == 'user' ? 'user-message' : 'ai-message'}`} key={message.id}>
                                <div className="ai-dialogue-message__content">
                                    <div className="ai-dialogue-message__text">{message.content}</div>
                                    <div className="ai-dialogue-message__tiem">{message.timeStamp}</div>
                                </div>
                            </div>
                        ))
                    }
                    {/*ai回复加载中*/}
                    {isLoading && (
                        <div className='ai-dialogue-message ai-message' >
                            <div className="ai-dialogue-message__content">
                                <DotLoading style={{ fontSize: '32px' }}></DotLoading>
                            </div>
                        </div>
                    )
                    }


                </div>
            </div>
            <footer className='ai-dialogue-footer'>
                <div className="ai-dialogue-input-container">
                    <textarea
                        ref={InputRef}
                        className='ai-dialogue-input'
                        placeholder='请输入消息...'
                        rows={1}
                    ></textarea>

                    <div className="ai-dialogue-actions">
                        <button className={`ai-dialogue-voice-btn ${isRecording ? 'recording' : ''}`} onClick={() => { setIsRecording(!isRecording) }}>
                            <i className={`iconfont ${isRecording ? 'icon-jieshu' : 'icon-a-MATE_huaban1fuben110'}`}></i>
                        </button>
                        <button
                            onClick={handleSendMessage}
                            className="ai-dialogue-send-btn">
                            <i className="iconfont icon-fasong"></i>
                        </button>
                    </div>

                </div>
            </footer>

        </div>
    )
}
