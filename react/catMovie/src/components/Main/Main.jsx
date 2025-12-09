import React from 'react'
import './Main.css'
import MovieList from './MovieList/MovieList.jsx'
export default function Main() {
    const arr=[]
    return (
        <div className='mainer'>
            <MovieList></MovieList>
            <MovieList></MovieList>
        </div>
    )
}
