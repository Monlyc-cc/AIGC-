import React, { useRef, useState } from 'react'

export default function App() {
  const [imgUrl, setImgurl] = useState(null)
  const [file, setFile] = useState(null)
  const audioRef=useRef(null)
  const handle = (e) => {
    const file = e.target.files[0]
    if (file) {
      //图片处理成字符串路径(本地路径，外部无法访问)
      const imageUrl = URL.createObjectURL(file)
      setImgurl(imageUrl)
      setFile(file)
    }
  }
  const upto = async () => {
    /*
    curl --location 'https://4j8cfbx3n3.coze.site/run' \
    --header 'Authorization: Bearer <YOUR_TOKEN>' \
    --header 'Content-Type: application/json' \
    --data '{"image":""}
  */
    const API_TOKEN = import.meta.env.VITE_COZE_IMAGE_TO_TEXT_AND_VOICE
    const dataUrl = await new Promise((resolve) => {
      //将文件资源  转为 base64格式
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        resolve(reader.result)
      }
    })
    console.log(dataUrl);
    // 发请求
    // 将base64格式资源发到服务器端，调用coze工作流获得数据
    const res = await fetch('/coze-api/run', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}` ,
        'Content-Type': `application/json` 
      },
      body:JSON.stringify({image:dataUrl})
    })
    const data=await res.json();
    console.log(data)
    audioRef.current.src=data.audio_url
    audioRef.current.play()
  }
  return (
    <div>
      <div className="update_image">
        <input type="file" onChange={handle} />
        <div className="previow">
          <img src={imgUrl} width={'100px'} />
        </div>
        <button onClick={upto}>上传</button>
      </div>
      <audio ref={audioRef}></audio>
    </div>
  )
}
