import React, { useRef, useState } from 'react'
import './app.css'
export default function App() {
  const [status, setStatus] = useState('ready')
  const audioRef = useRef(null)
  const [inputText, setInputText] = useState('')
  function createBlobUrl(base64AudioData) {
    let byteArrays = []
    let byteCharacters = atob(base64AudioData)
    for (let offset = 0; offset < byteCharacters.length; offset++) {
      let byteArray = byteCharacters.charCodeAt(offset) // 将ASCII字符串中的每一个字符处理成 UTF-16 编码格式
      byteArrays.push(byteArray)
    }
    let blob = new Blob([new Uint8Array(byteArrays)], { type: 'audio/mp3' })

    return URL.createObjectURL(blob)  // 将二进制的数据处理成一个可以用的 url 格式的样子
  }
  const generateAudio = async () => {
    if (!inputText) {
      setStatus('内容不能为空')
      return;
    }
    const token = import.meta.env.VITE_ACCESS_TOKEN;
    const appid = import.meta.env.VITE_APP_ID;
    const clusterdId = import.meta.env.VITE_CLUSTER_ID;
    const voice_type = 'zh_female_daimengchuanmei_moon_bigtts';
    const endPoint = '/tts/api/v1/tts'
    const Header = {
      Authorization: `Bearer;${token}`,
      'Content-Type': 'application/json'
    }
    const payload = {
      app: {
        appid,
        token,
        cluster: clusterdId
      },
      user: {
        uid: 'use123'
      },
      audio: {
        voice_type: voice_type,
        encoding: "ogg_opus",
        emotion: 'happy'
      },
      request: {
        reqid: Math.random().toString(36).substring(7),
        text: inputText,
        operation: "query",
      }
    }
    setStatus('loading...')
    const res = await fetch(endPoint, {
      method: 'POST',
      headers: Header,
      body: JSON.stringify(payload),
    })
    const data = await res.json()
    const url = createBlobUrl(data.data)
    audioRef.current.src = url;
    audioRef.current.play();
  }

  return (
    <div className='container'>
      <div>
        <label>Prompt</label>
        <button onClick={generateAudio}>播放</button>
        <textarea className='input' type='text' onChange={(e) => { setInputText(e.target.value) }}></textarea>
      </div>
      <div className="output">
        <div>{status}</div>
        <audio ref={audioRef}></audio>
      </div>
    </div>
  )
}
