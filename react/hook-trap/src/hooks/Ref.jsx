import React, { useRef } from 'react'

export default function Ref() {
    const numRef=useRef(0)
    console.log()
  return (
    <div>
        <input type="text" ref={numRef}  onChange={()=>{
            console.log(numRef.current.value)
        }}/>
    </div>
  )
}
