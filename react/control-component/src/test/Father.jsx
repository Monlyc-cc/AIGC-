import React, { useState } from 'react'
import Son from './son'
export default function Father() {
    const [name, setname] = useState("小猫")
    return (
        <div>
            <p>你好</p>
            <Son name={name}></Son>
        </div>
    )
}
