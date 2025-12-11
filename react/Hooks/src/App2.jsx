import React, { useEffect, useState } from 'react'

export default function App2() {
    const [count, setCount] = useState(0)
    const [list, setList] = useState([])
    //useEffect 副作用函数 一定要放一个函数
    useEffect(() => {
        setInterval(() => {
            console.log("xxx")

            setCount(count + 1)
        }, 1000)
    }, [])
    useEffect(() => {
        fetch("https://mock.mengxuegu.com/mock/66585c4db462b81cb3916d3e/songer/songer")
            .then((res) => {
                return res.json()
            }
            )
            .then((data) => {
                setList([...list, ...data.data])
            })
    }, [])
    return (
        <div>
            <button onClick={() => { setCount(count + 1) }}>{count}</button>
            <ul>
                {
                    list.map((item, index) => {
                        return <li key={index}>{item.name}{item.avatar}{item.songsCount}</li>
                    })
                }
            </ul>
        </div>
    )
}
