import React, { lazy } from 'react'
import LazyLoad from 'react-lazyload'
import MyLazyLoad from './MyLazyLoad'
//组件没有出现在可视区域时,组件代码都不加载,被improt包裹的模块,会单独打包
const Demo = lazy(() => { return import('./Demo') })


export default function ReactLazyload() {
    return (//第三方 懒加载库
        <div>
            <Demo></Demo>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <MyLazyLoad placeholder={<div>loading...</div>}>
                <img src="https://cdn.independent-photo.com/wp-content/uploads/2022/02/Yifeng-Ding-1900x772.jpeg?width=1200&quality=85&format=webp" alt="" />
            </MyLazyLoad>
            <MyLazyLoad placeholder={<div>loading...</div>} offset={300}>
                <img src="https://pic.5tu.cn/uploads/allimg/2410/pic_5tu_big_6672913_670cc1f9152fa-thumb-650.jpg" alt="" />
                <Demo></Demo>
            </MyLazyLoad>
            <MyLazyLoad></MyLazyLoad>
        </div>
    )
}
