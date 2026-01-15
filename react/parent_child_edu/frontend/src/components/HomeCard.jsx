import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomeCard({tag,title,desc,path}) {
    const navigate=useNavigate()
    return (
        //title ,desc,tag

        <div className="home-card">
            <div className="home-card__tag">{tag}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <button className='home-btn home-btn--small' onClick={()=>{
                navigate(`../${path}`)
            }}>进入</button>
        </div>
    )
}
