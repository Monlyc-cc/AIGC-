import {type FileItem}from '../../Files/types'
export const JsonToJS=(file:FileItem)=>{
    const JS=`export default ${file.value}`
    return URL.createObjectURL(new Blob([JS], { type: 'application/javascript' }))
}
export const CssToJS = (file: FileItem) => {
  const randomId = new Date().getTime()
  const js = `
(() => {
    const stylesheet = document.createElement('style')
    stylesheet.setAttribute('id', 'style_${randomId}_${file.name}')
    document.head.appendChild(stylesheet)

    const styles = document.createTextNode(\`${file.value}\`)
    stylesheet.innerHTML = ''
    stylesheet.appendChild(styles)
})()
    `
  return URL.createObjectURL(new Blob([js], { type: 'application/javascript' }))
}