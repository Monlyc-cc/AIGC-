import './MovieList.css'
import MovieItem from './MovieItem/MovieItem.jsx'
import getDate from './GetData/GetData.jsx'
import { useState } from 'react'
import { useEffect } from 'react'

export default function MovieList(props) {
    let [movieList,setMovieList]=useState([])
    useEffect(()=>{
        getDate(props.url).then((arr)=>{
            setMovieList(arr);
        })
    },[])
    return (
        <div className="movie_list">
            <div className="nav">
                <div className="nav_title">影院热映</div>
                <div className="more">
                    <span>查看更多</span>
                    <i className="iconfont icon-youjiantou"></i>
                </div>
            </div>
            <div className="list">
                {
                    movieList.length==0 ? <div>暂无数据</div> : movieList.map((item,index)=>{
                        return <MovieItem Img={item.img} nm={item.nm} sc={item.sc}></MovieItem>
                    })
                }
            </div>
        </div>
    )
}
