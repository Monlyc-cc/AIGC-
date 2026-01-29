import React, { useRef, useState } from 'react'
import './index.less'
import { useEffect } from 'react';
export default function RecognitionResult({ recognitionResult }) {
    console.log(recognitionResult);
    const [isPlaying, setIsPlaying] = useState(false)
    const Refaudio = useRef(null)

    const audio_url = recognitionResult?.audio_url
    const image_description = recognitionResult?.image_description
    const safety = recognitionResult?.safety
    const handleAudioPlay = () => {
        setIsPlaying(!isPlaying)
        if (!isPlaying) {
            Refaudio.current?.play()
        }
        else {
            Refaudio.current?.pause()
        }

    }
    useEffect(()=>{
        setIsPlaying(false)
    },[recognitionResult])
    return <div>
        {
            (
                <div className='object-recognition-result result-container'>
                    <div className="object-recognition-result__header">
                        <h2>识别结果</h2>
                        <div onClick={handleAudioPlay} className='object-recognition-result__voice'>
                            <i style={
                                {
                                    color: isPlaying ? '#ff7a45' : "#515151"
                                }
                            } className='iconfont icon-yinliang-F'></i>
                        </div>
                    </div>
                    <div className="object-recognition-result__content">
                        <div className='object-recognition-result__description'>
                            <h4>物品介绍</h4>
                            <p>{image_description || '暂无介绍'}</p>
                        </div>
                        <div className='object-recognition-result__safety'>
                            <h4>安全提示</h4>
                            <p>{safety || '暂无安全信息'}</p>
                        </div>
                    </div>
                    <audio ref={Refaudio} src={audio_url || null} ></audio>
                </div>
            )
        }
    </div>
}
