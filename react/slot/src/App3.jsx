import React, { useEffect, useRef, useState } from 'react'
import Protal from './components/Protal.jsx'
export default function App3() {
    const [count, setCount] = useState(1)
    useEffect(() => {
        const time = setInterval(() => {
            setCount((pre) => { return ++pre })
        }, 1000)
        return () => { clearInterval(time) }
    }, [])
    const content = <div className='btn'>
        <button>按钮</button>
    </div>

    return <Protal attach={'#root'}><div>{count}{content}</div></Protal>
}
