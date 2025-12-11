import { useState } from 'react'

export default function App() {
  const [num, setNum] = useState(0);
  let timer;

  function fn() {
    console.log(timer)

    
    clearTimeout(timer)
    console.log("clear timeout:" + (timer))


    timer = setTimeout(() => {
      console.log("timeout:" + timer)
      setNum(num + 1);
    }, 1000)
    console.log("create timeout:" + (timer))

  }

  return (
    <div>
      <div className="hhh">功德值{num}</div>
      <button onClick={fn}>功德+1</button>
    </div>
  )
}
