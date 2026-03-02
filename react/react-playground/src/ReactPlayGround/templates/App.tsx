import React, { useState } from 'react'
import './App.css'
export default function App() {

    const [count, setCount] = useState(0)
    return (

        <div>
            <h1>hello world</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                tick me {count}
            </button>
        </div>
    )
}
