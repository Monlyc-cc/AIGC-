console.log(globalThis)
console.log(Object.getOwnPropertyNames(global)) 



// node 
console.log(__dirname)
console.log(__filename)
console.log(process.argv)

//Buffer

//字符转Buffer流
const buf=Buffer.from('hello node') //利用二进制表示数据
console.log(buf)// 打印出来十六进制， 数据是二进制，但是以16进制展现

//Buffer流转字符串 toString()方法
console.log(buf.toString())
