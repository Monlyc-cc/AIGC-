import React, { useEffect } from 'react'
import './index.css'
import { animated, useSpringValue, useSpring, useSprings, Spring, useTrail } from '@react-spring/web'
export default function index() {
    // const styles = useSpring({
    //     from: {
    //         width: 0,
    //         height: 0
    //     },
    //     to: {
    //         width: 200,
    //         height: 200
    //     },
    //     config: {
    //         // duration:2000,
    //         mass: 2,
    //         tension: 400,
    //         friction: 10
    //     }
    // })
    // useEffect(() => {
    //     // styles.start(300)
    // }, [])



    // const [styles, api] = useSpring(() => {
    //     return {
    //         from: {
    //             width: 100,
    //             height: 100
    //         },
    //         config: {
    //             mass: 2,
    //             tension: 200,
    //             friction: 10,
    //         }
    //     }
    // })
    // const handleSpring = () => {
    //     console.log('xxx');

    //     api.start(
    //         {
    //             width: 200,
    //             height: 200
    //         }
    //     )
    // }


    const [Springs, api] = useTrail(3, () => {
        return {
            from: { width: 0 },
            config: {
                duration: 1000
            }
        }
    })

    useEffect(()=>{
        api.start({width:300})
    },[])

    return (
        <div>
            {
                Springs.map((styles, index) => {
                    return <animated.div
                        key={index}
                        className={'box'}
                        style={{ ...styles }}
                    >index</animated.div>
                })
            }
        </div>

    )
}
