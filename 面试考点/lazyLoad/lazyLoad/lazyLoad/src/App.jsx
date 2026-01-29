import React, { lazy, useEffect, useRef } from 'react'
import './assets/app.less'
export default function App() {
  const refF = useRef(null)
  const img_arr = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MI3DS1MWiYmhcPGOt9exc5xNvoAjzoU4bw&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MI3DS1MWiYmhcPGOt9exc5xNvoAjzoU4bw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MI3DS1MWiYmhcPGOt9exc5xNvoAjzoU4bw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MI3DS1MWiYmhcPGOt9exc5xNvoAjzoU4bw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MI3DS1MWiYmhcPGOt9exc5xNvoAjzoU4bw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MI3DS1MWiYmhcPGOt9exc5xNvoAjzoU4bw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MI3DS1MWiYmhcPGOt9exc5xNvoAjzoU4bw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MI3DS1MWiYmhcPGOt9exc5xNvoAjzoU4bw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MI3DS1MWiYmhcPGOt9exc5xNvoAjzoU4bw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MI3DS1MWiYmhcPGOt9exc5xNvoAjzoU4bw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MI3DS1MWiYmhcPGOt9exc5xNvoAjzoU4bw&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MI3DS1MWiYmhcPGOt9exc5xNvoAjzoU4bw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MI3DS1MWiYmhcPGOt9exc5xNvoAjzoU4bw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MI3DS1MWiYmhcPGOt9exc5xNvoAjzoU4bw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MI3DS1MWiYmhcPGOt9exc5xNvoAjzoU4bw&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MI3DS1MWiYmhcPGOt9exc5xNvoAjzoU4bw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MI3DS1MWiYmhcPGOt9exc5xNvoAjzoU4bw&s',

  ]
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        entries.forEach(item => {
          if (item.isIntersecting) {
            item.target.src = item.target.dataset.origin
            item.target.removeAttribute('lazyload')
            io.unobserve(item.target)
          }
        })
      }
    )


    const imgs = document.querySelectorAll('img[lazyload]')
    imgs.forEach(img => {
      io.observe(img)
    })
  }                                                                                                                 )
  return (
    <div id='father' ref={refF} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      height: '400px',
      overflow: 'auto'
    }}>
      {
        img_arr.map((item, i) => {
          return (<img id='i' lazyload="true" key={i} src={'https://img.ixintu.com/upload/jpg/20210525/b31c778423dcdd9535e833b6e83cd1e9_15726_690_690.jpg!ys'} data-origin={item}   ></img>)
        })
      }
    </div>
  )
}
