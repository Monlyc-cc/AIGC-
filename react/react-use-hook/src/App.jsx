import React, { use, useEffect, useState } from 'react'
import useMountedState from './hooks/useMountedState'
import { useSetState } from 'react-use';
export default function App() {
  const isMounted = useMountedState()
  const [num, setNum] = useState(0)
  console.log(isMounted());

  useEffect(() => {

    setTimeout(() => {
      setNum(num + 1)
    }, 1000)

  },[])
  return (
    <div>{isMounted() ? 'y' : 'n'}</div>
  )
}
