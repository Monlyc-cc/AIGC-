import { useEffect, useRef, useState } from "react"

export default function useMountedState() {
    const resRef=useRef(false)
    const get = () => resRef.current
    useEffect(() => {
        resRef.current = true
    }, [])
    return get
}