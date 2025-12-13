import React, { useRef, useState } from 'react'
import './app.css'
import OpenAI from "openai";

export default function App() {
  const [value, setValue] = useState("很高兴为你服务");
  const [question, setQuestion] = useState("请输入疑问")
  const checkRef = useRef(false);

  const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey: `${import.meta.env.VITE_DEEPSEEK_API_KEY}`,
    dangerouslyAllowBrowser: true,
  });

  async function getAnswer(question) {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: question }],
      model: "deepseek-chat",
      stream: checkRef.current.checked,        
    });
    if (checkRef.current.checked) {
      //要大模型以流式资源输出
      let str="";
      for await(let chunk of completion)
      {
        str+=chunk.choices[0].delta.content
        setValue(str)
      }
    }
    else {
      setValue(completion.choices[0].message.content);
    }
  }

  function update() {
    if (!question) {
      return;
    }
    setValue("思考中")
    getAnswer(question)
  }

  function handleChange(e) {
    setQuestion(e.target.value);
    console.log(question);
  }

  return (
    <div className='container' >
      <div className='input'>
        <label htmlFor="i_input">输入</label>
        <input type="text" id="i_input" value={question} onChange={handleChange} />
        <button onClick={update}>提交</button>
      </div>

      <div className='output'>
        <div className='stringming'>
          <label htmlFor="check">Stringming</label>
          <input type="checkbox" id="check" ref={checkRef} />
        </div>
        <div className='ai_output'>
          <p>{value}</p>
        </div>
      </div>

    </div>
  )
}
