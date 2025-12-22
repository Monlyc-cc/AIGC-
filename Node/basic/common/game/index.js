//获取进程的标准输入
// process.stdin.on('data', (e) => {
//     //e为node中的流式资源
//     console.log(e)

//     //toString()方法将流式资源准换为字符串
//     console.log(e.toString())

//     // trim() 取出字符串收尾两端的空格
//     console.log(e.toString().trim())



// })

// const playerAction = process.argv[process.argv.length - 1]
// fn(playerAction)
import { fn } from './lib.js'

process.stdin.on('data',(e)=>{
    fn(e.toString().trim())
})