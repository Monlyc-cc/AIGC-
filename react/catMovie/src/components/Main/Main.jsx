import React from 'react'
import './Main.css'
import MovieList from './MovieList/MovieList.jsx'
export default function Main() {
    return (
        <div className='mainer'>
            <MovieList url="https://apis.netstart.cn/maoyan/index/movieOnInfoList" ></MovieList>
        </div>
    )
}
