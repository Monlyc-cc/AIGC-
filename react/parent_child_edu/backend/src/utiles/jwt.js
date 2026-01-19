const jwt = require('jsonwebtoken')
const verifyToken = async (ctx, next) => {
    const token = ctx.request.header.authorization
    if (token) {
        //逆着解析token
        try {
            //jwt.verify(token, secretOrPublicKey, [options, callback])
            // const token = jwt.sign({ id: res.id, account: res.account }, 'shhhhh', { expiresIn: '7d' });
            const decoded = jwt.verify(token, 'shhhhh')
            //console.log(decoded)
            if (decoded.id) {
                //token合法,往上下文对象上挂数据
                ctx.userId=decoded.id
                await next()
            }


        }
        catch (error) {
            ctx.status = 416
            ctx.body = {
                code: 0,
                message: 'token格式错误'
            }
        }
    }
    else {
        ctx.status = 416
        ctx.body = {
            code: 0,
            message: '登录验证过期'
        }
    }
}


module.exports = {
    verifyToken
}