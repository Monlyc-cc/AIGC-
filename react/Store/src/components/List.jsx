import React, { useEffect } from 'react'
import useListStore from'../store/list'
export default function List() {
    const list = useListStore((state) => { return state.List })
    const fetchList=useListStore((state)=>{return state.fetchList})
    useEffect(()=>{
        fetchList()
    },[])
    console.log(list)
    return (
        <div>
            {
                list.map((item)=>{
                    return <div key={item.name}>{item.name}</div>
                })
            }
        </div>
    )
}
