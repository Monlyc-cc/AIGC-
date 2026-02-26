import React, { useState, useContext } from 'react'
import Editor from './Editor'
import FileNameList from './FileNameList'
import { PlayGroudContext } from '../../ReactPlayGround/PlayGroudContext'
import { debounce } from 'lodash-es'
export default function index() {
  const {
    files,
    selectedFilename,
    setFiles
  } = useContext(PlayGroudContext)


  const handleChange = (value: string | undefined) => {
    console.log(1);
    
    setFiles({
      ...files,
      [selectedFilename]: {
        ...files[selectedFilename],
        value
      }
    })

  }



  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <FileNameList></FileNameList>
      <Editor file={files[selectedFilename]} onChange={debounce(handleChange,500)}></Editor>
    </div>
  )
}
