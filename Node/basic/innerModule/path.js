//path模块 
// 用于拼接文件路径
const path=require('path')

//path.join() //将输入的字符串拼接成文件路径
console.log(path.join('a','b','c'))//   a/b/c

  //process.cwd()返回当前终端的路径
  console.log(process.cwd()) // D:\学习\字研班\Node
  console.log(path.join(process.cwd(),'xxxx')) // D:\学习\字研班\Node\xxxx

//path.resolve() 直接返回出当前文件的绝对路径
console.log(path.resolve())   // 打印当前绝对路径
console.log(path.resolve('a','b','c')) // 传入字符可以将绝对路径+‘传入字符’拼接新的文件路径


// path.dirname() //获取当前文件的绝对路径
console.log(path.dirname(__filename))
