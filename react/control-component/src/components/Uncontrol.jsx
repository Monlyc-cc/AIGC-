import React from 'react'
import {useRef} from "react"
export default function Uncontrol() {
const input = useRef(null);
function login()
{
    console.log(input.current.value);
}
    return (
        <div>
            <input type="text" id="input" ref={input} />
            <button onClick={login}>登录</button>
        </div>
    )
}
