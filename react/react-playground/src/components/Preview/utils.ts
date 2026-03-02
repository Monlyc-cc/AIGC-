import { type FileItem } from '../../Files/types'

export const JsonToJS = (file: FileItem) => {
  const JS = `export default ${file.value}`
  return URL.createObjectURL(new Blob([JS], { type: 'application/javascript' }))
}

export const CssToJS = (file: FileItem) => {
  // 将css文件资源转换为 js 文件资源
  // 将css 文件资源放在 js 自执行函数中，当 某分js 文件引入这个地址时，则函数自执行可以响应式为html添加样式
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
export const getIframeUrl = (iframe: string, js: string, import_map: string) => {
  // 将文件资源转换为 iframe 地址
  // <script type="importmap"></script>
  //   <script type="module" id="appSrc"></script>
  //   <div id="root"></div>

  const newIframe = iframe.replace('<script type="importmap"></script>', `<script type="importmap">${import_map}</script>`).replace('<script type="module" id="appSrc"></script>', `<script type="module" id="appSrc">${js}</script>`)

  console.log(newIframe);
  return URL.createObjectURL(new Blob([newIframe], { type: 'text/html' }))
}