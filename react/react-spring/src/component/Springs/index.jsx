import React from 'react'
import { useChain, useSpringRef, useSprings, useTrail, animated } from '@react-spring/web'
import './index.css'
export default function index() {
    const api1 = useSpringRef()
    const api2 = useSpringRef()


    const [Springs2] = useSprings(3, () => {
        return {
            ref: api2,
            from: {
                height: 100
            },
            to: {
                height: 50
            },
            config: {
                duration: 1000
            }
        }
    }, [])
    const [Springs1] = useTrail(3, () => {
        return {
            ref: api1,
            from: {
                width: 0
            },
            to: {
                width: 200
            },
            config: {
                duration: 1000
            }
        }
    }, [])

    useChain([api1, api2], [0, 1], 500)
    return (
        <div>
            {
                Springs1.map((styles, index) => {
                    return (<animated.div className={'box'} key={index} style={{ ...styles, ...Springs2[index] }}></animated.div>)
                })
            }
        </div>
    )
}
