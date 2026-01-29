import React, { useEffect, useState, cloneElement } from 'react'
//react 中 克隆dom接口
export default function useHover(element) {
    const [reF,setReF]=useState()
    const [hovered, setHovered] = useState(false)
    let hoveralbe
    useEffect(() => {
        const onMouseEnter = (originOnMouseEnter) => {
            return () => {
                originOnMouseEnter?.()
                setHovered(true)
            }
        }
        const onMouseLeave = (originOnMouseLeave) => {
            return () => {
                originOnMouseLeave?.()
                setHovered(false)
            }
        }

        hoveralbe = cloneElement(element(hovered), {
            onMouseEnter: onMouseEnter(element.this.props.onMouseEnter),
            onMouseLeave: onMouseLeave(element.props.onMouseLeave),
        })
        setReF()
    }, [element])
    return [hoveralbe.hovered]
}
