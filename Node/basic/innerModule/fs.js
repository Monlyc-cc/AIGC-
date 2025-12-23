const fs=require('fs')
//读文件

//同步读取文件
//: fs.readFileSync(path,‘utf-8’)
const syncData= fs.readFileSync(__dirname+"/test.txt",'utf-8')
console.log(syncData)


// 异步读取文件 ,// 利用回调函数读取文件 
fs.readFile((__dirname+"/test.txt"),'utf-8',(err,data)=>{
    if(err)
    {
        console.log(err)
    }else
    {
        console.log(data)
    }
})

//新版本异步读取文件
fs.promises.readFile((__dirname+"/test.txt"),'utf-8').then((data)=>{
    console.log(data)    
})



// 写文件

// 同步写文件 fs.writeFileSync(path, data)     
// - 本质重写文件，就数据不保留
// - 写文件时，如果路径文件不存在，则自动创建文件
fs.writeFileSync(__dirname+'/newTest.md',"hello world")                                                                                   