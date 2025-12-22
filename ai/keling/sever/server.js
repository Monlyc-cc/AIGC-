// 做可灵的身份校验，创建一个接口地址，让前端可以访问。
import * as dotenv from 'dotenv'
import express from 'express' // node 的框架
import jwt from 'jsonwebtoken'// 因为可灵 要求我们调用他的大模型需要

// 读取本地的环境文件中的内容
dotenv.config(
    {
        path: ['.env.local', 'env']
    }
)
const accessKeyId = process.env.ACCESS_KEY_ID // process 指代整个js进程，由此读到环境文件中的数据
const accessKeyIdSecret= process.env.ACCESS_KEY_SECRET


//搭建一个后端

const app=express()
const port=3000

async function authKelingAi(ak,sk){
    const header={
        algorithm:'HS256'
    }
    const now=Math.floor(Date.now()/1000);
    const payload={
        iss:ak,
        exp:now+1800,
        npf:now-5,
    }
    const token=  jwt.sign(payload,sk,header)
    return token
}
app.get("/jwt-auth",async (req,res)=>{
    const token=await authKelingAi(accessKeyId,accessKeyIdSecret)
    res.send(token)
}) // 在后端声明了一个，用get的访问接口

// 将app跑起来，跑在端口port上
app.listen(port,()=>{
console.log(`项目已经启动在${port}`)
})