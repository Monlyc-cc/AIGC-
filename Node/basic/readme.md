# node.js 是什么？
是一个运行在操作系统上的 javaScript 运行环境，提供了一系列的模块，供js调用。
js没有办法直接读取操作系统的文件
# node.js 与 window.js 的不同

- 模块化语法
1. commonJS 规范 node.js抛出方法
    - module.requires={}
    - exports.fn=()=>{} 
        //exports 是一个已经存在的对象，并且默认被抛出
        //往exports上添加属性
    - module.exports=()=>{}   
        //优先级比exprots更高


2. ESModule 规范  -- es6以后js官方更新了自己的抛出规范，node.js也兼容

node 有的时候， es6还没有呢。所以module抛出方法与es6不同

# 解构： 
1.数组的解构
2.对象的结构

# 获取进程的标准输入
process.stdin.on('data',(e)=>{
    console.log(e)
})

