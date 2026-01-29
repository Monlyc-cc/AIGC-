import React from 'react'
import { useEffect } from 'react'
export default function useLifeCycle(begin, close) {
    if(!close||!begin)
    {
        throw new Error('close or begin is not define')
    }
    return (
        useEffect(() => {
                begin()
            return close
        }, [])
    )
}
