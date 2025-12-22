import React, { useEffect, useLayoutEffect, useState } from 'react'

export default function LayOutEffect() {
  const [num,setNum]=useState(0)
  function getDate(){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(666)
      },1000)
    })
  }
  useLayoutEffect(()=>{
    console.log("uselayouteffect");
    
    getDate().then((res)=>{
      setNum(res)
    })
  })
  return (
    <div onClick={()=>{
      setNum((pre)=>{setNum(pre+1)})
    }}>{num}</div>
  )
}
