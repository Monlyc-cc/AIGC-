import React, { use, useRef, useState } from 'react'

export default function App2() {
    const [x, setX] = useState<number>()
    const refA = useRef<Function>(null)
    refA.current=()=>{}
    return (
        <div>

        </div>
    )
}
