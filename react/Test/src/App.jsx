import React from 'react'
let num=0
function Child(){
  num++;
  return <div>{num}</div>
}

export default function App() {
  return (
    <div>
      <Child></Child>
      <Child></Child>
      <Child></Child>
    </div>
  )
}
