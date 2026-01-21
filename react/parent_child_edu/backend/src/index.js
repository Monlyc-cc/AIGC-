const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const authRouters = require('./routes/authRouter.js')
const cozeRouters=require('./routes/cozeApi.js')
const mineRouters=require('./routes/mineRouer.js')
const cors = require('@koa/cors');

// 创建koa实例对象
const app = new Koa()

//创建一个route对象

//测试接口
const router = new Router(
    {
        prefix: '/api'
    }
)
router.get('/test', (ctx) => {
    ctx.body = {
        status: 'ok',
        message: 'sucess'
    }
})


//让app 讲router中定义的回调函数 全都use掉

app.use(cors({
    origin() {//处理跨域 
        return "http://localhost:5173";
        },
    }))
    .use(bodyParser())
    .use(router.routes(), router.allowedMethods())
    .use(authRouters.routes(), authRouters.allowedMethods())
    .use(cozeRouters.routes(),authRouters.allowedMethods())
    .use(mineRouters.routes(),mineRouters.allowedMethods())

//呗appuse 的函数体 

app.listen(3000, () => {
    console.log('服务运行在 3000 端口')
})
