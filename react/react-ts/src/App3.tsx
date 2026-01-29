import React, { useEffect, useRef } from 'react'


const Child = (props: { x: React.RefObject<HTMLInputElement | null> }) => {
  return (
    <div>
      <input type="text" ref={props.x} />
    </div>
  )

}


export default function App3() {
  const ref = useRef<HTMLInputElement>(null)
  useEffect(() => {
    console.log(ref.current)
    ref.current?.focus()
  }, [])
  return (
    <div>
      <Child x={ref}></Child>
    </div>
  )
}
