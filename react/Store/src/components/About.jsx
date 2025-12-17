import React from 'react'
import useCountStore from '../store/count'
export default function About() {
    const count=useCountStore((state)=>{return state.count});
  return (
    <div>
        <h2>title    -    {count}</h2>
    </div>
  )
}
