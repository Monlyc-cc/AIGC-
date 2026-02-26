import React from 'react'
import logoSvg from "./icons/logo.svg"
import styles from "./index.module.scss"
export default function index() {
  return (
    <div className={styles.header} style={{ borderBottom: "1px solid #000" }}>
      <div className={styles.logo}>
        <img src={logoSvg} alt="" />
        <span>React Playground</span>
      </div>
    </div>
  )
}
