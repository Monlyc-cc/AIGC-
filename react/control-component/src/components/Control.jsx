import React, { useState } from 'react'

export default function Control() {
    // input 内拥有onChange事件 传入一个函数
    const [msg, setMsg] = useState("178266234");
    function changeHandler(e) {
        setMsg("" + e.target.value);
        console.log(msg)
    }
    return (
        <div>
            <input type="text" value={msg} onChange={changeHandler} />
        </div>
    )
}
