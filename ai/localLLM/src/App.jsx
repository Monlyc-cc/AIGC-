import React, { useRef, useState } from 'react'
import './App.css'
import ollama from 'ollama'

export default function App() {
  const [question, setQuestion] = useState("请讲一个狼来了的故事")
  const [content, setContent] = useState(['等待您的输入',''])
  const checkRef = useRef(false);

  //跟LLM交互
  const MODEL_NAME = "deepseek-r1:1.5b";
  async function getAnswer(question) {
    const response = await ollama.chat({
      model: MODEL_NAME,
      messages: [{ role: 'user', content: question }],
      stream: checkRef.current.checked,

    })
    setContent(['',''])
    if (checkRef.current.checked) {
      for await (let part of response) {

        setContent((pre) => {
          if (part.message.thinking) {
            pre[0]+= part.message.thinking;

          }
          if (part.message.content) {
            pre[1] += part.message.content;
          }
          console.log(pre)
          return [pre[0],pre[1]]
        })
      }


    }
    else {
      setContent(response.message.thinking+response.message.content)
      console.log(response.message.thinking)
      console.log(response.message.content)
    }

  }

  const update = (question) => {
    if (!question) {
      return;
    }
    setContent(["思考中...",''])
    getAnswer(question)

  }

  return (
    <div className='container'>
      <header className='app-header'>
        <h1>Ollama 本地对话助手</h1>
        <p className='subtitle'>简单、高效的本地 AI 对话体验</p>
      </header>
      <main className='char-container'>
        <div className="input-section">
          <label htmlFor="question-input" className='input-label'>输入问题:</label>
          <div className="input-group">
            <input type="text" value={question} onChange={(e) => { setQuestion(e.target.value) }} id="question-input" className='input' placeholder='请输入您的问题......' />
            <button className='submit-btn' onClick={() => {
              update(question);
            }}>
              <span className='btn-text' >发送</span>
            </button>
          </div>
        </div>
        <div className="setting-section">
          <label className='settings-label'>
            <input type="checkbox" ref={checkRef} />
            <span>实时流式输出</span>
          </label>
        </div>
        <div className="output-section">
          <div className="output-header">
            <h2>AI回复</h2>
          </div>
          <div className="output-content">
            <div style={{ whiteSpace: 'pre-line' }}>{content[0]}</div>
            <div style={{ whiteSpace: 'pre-line' }}>{content[1]}</div>
          </div>
        </div>
      </main>
      <footer className='app-footer'>
        <p>连接本地的Ollama服务</p>
      </footer>
    </div>
  )
}
