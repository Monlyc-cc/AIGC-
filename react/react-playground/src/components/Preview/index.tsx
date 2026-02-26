import React ,{useContext, useEffect,useState}from 'react'
import { compileCode } from './compiler'
import { PlayGroudContext } from '../../ReactPlayGround/PlayGroudContext'
export default function index() {
  const {files}=useContext(PlayGroudContext)
  const [result,setResult]=useState<string>('')
  useEffect(()=>{
    setResult(compileCode(files))
  },[files])
  return (
    <div>{result}</div>
  )
}
