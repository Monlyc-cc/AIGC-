import React from 'react'

//Allotment组件用于分区
import { Allotment } from "allotment"
import "allotment/dist/style.css"; //组件自带的样式文件

import Header from "../components/Header" //头部组件
import CodeEditor from "../components/CodeEditor" //代码编辑区
import Preview from "../components/Preview" // 结果展示区

import { PlayGroudContextProvider } from "./PlayGroudContext"

export default function ReactPlayGround() {
  return (
    <PlayGroudContextProvider>
      <div style={{ height: "100VH" }}>
        <Header></Header>

        <Allotment defaultSizes={[100, 100]}>

          <Allotment.Pane minSize={40}>

            <CodeEditor></CodeEditor>

          </Allotment.Pane>

          <Allotment.Pane minSize={50}>

            <Preview></Preview>

          </Allotment.Pane>
        </Allotment>
      </div>
    </PlayGroudContextProvider>
  )
}
