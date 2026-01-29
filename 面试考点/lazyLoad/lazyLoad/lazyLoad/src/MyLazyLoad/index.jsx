import React, { useEffect, useRef, useState } from 'react'

export default function index(props) {
    const {
        className = '',
        style,
        width,
        height,
        offset = 0,
        placeholder,
        children,
        onContentVisible ,// 当组件被展示时执行
        onClose
    } = props

    const [visible, setVisible] = useState(false)
    const styles = { ...style, width, height }
    const containerRef = useRef()
    const elementObserver = useRef()

    useEffect(() => {

        //获取到 被监听组件
        const node = containerRef.current

        //初始化 交叉监听器
        const lazyloadHandle = (entries) => {
            console.log(entries);
            entries.forEach(item => {
                if (item.isIntersecting) {
                    //展示图片
                    setVisible(true)
                    //触发组件onbegin函数
                    onContentVisible?.()
                    
                    // 结束监听
                    elementObserver.current.unobserve(node)
                }
            });
        }

        const options = {
            rootMargin: typeof (offset) == 'number' ? offset + 'px' : '0px',
            threshold: 0,
        }
        elementObserver.current = new IntersectionObserver(lazyloadHandle, options)
        elementObserver.current.observe(node)


        return () => {
            //组件卸载时取消交叉监听
             elementObserver.current.unobserve(node)
             onClose?.()
        }

    }, [])

    return (
        <div ref={containerRef} style={styles} className={'mylazyload-wrapper '+className}>
            {
                visible ? children : placeholder
            }
        </div>
    )
}
