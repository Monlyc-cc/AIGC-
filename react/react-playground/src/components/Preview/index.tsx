import React, { useContext, useEffect, useState } from 'react'
import { compileCode } from './compiler'
import { PlayGroudContext } from '../../ReactPlayGround/PlayGroudContext'
import { getIframeUrl } from './utils'
import iframeRaw from './iframe.html?raw'
import { IMPORT_MAP_FILE_NAME } from '../../Files/constants'
export default function index() {
  const { files } = useContext(PlayGroudContext)
  const [result, setResult] = useState<string>('')
  const [iframeUrl, setIframeUrl] = useState<string>('')
  useEffect(() => {
    setResult(compileCode(files))
  }, [files])
  useEffect(() => {

    console.log(files[IMPORT_MAP_FILE_NAME]);
    
    if (files[IMPORT_MAP_FILE_NAME]) {
      setIframeUrl(getIframeUrl(iframeRaw, result, files[IMPORT_MAP_FILE_NAME].value!))
    }
  }, [result, files[IMPORT_MAP_FILE_NAME]?.value])

  console.log('url:'+iframeUrl);
  
  return (
    <div style={{height:'100%'}}>
      <iframe src={iframeUrl} style={{
        height: '100%',
        width: "100%",
        border: 'none',
        padding: 0
      }} ></iframe>
    </div>
  )
}
