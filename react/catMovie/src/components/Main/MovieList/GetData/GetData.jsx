import React from 'react'

export default async function getDate(url) {
    let arr = [];
    let obj;
    await fetch(url,
        { method: 'GET' },)
        .then((res) => {
            return res.json()
        }
        )
        .then((data) => {
            for (let i of data.movieList) {
                obj = {};
                obj.img = i.img;
                obj.nm = i.nm;
                if (i.sc) {
                    obj.sc = i.sc;
                }
                else {
                    obj.sc = "暂无评分";
                }
                arr.push(obj);
                console.log(obj);
            }
        })
    return arr;
}
/*
 
*/

