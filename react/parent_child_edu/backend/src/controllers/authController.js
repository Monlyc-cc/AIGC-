const { findUserByAccount, createUser } = require('../models/userModel.js')
const { generateCaptcha, verifyCaptcha } = require('../utiles/captcha.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
async function login(ctx) {
    console.log('login请求成功')
    //解析请求体中的账号密码
    const { account, password } = ctx.request.body

    //api不一定是自己人调用，可能是外人调用，所以后端需要验证数据的正确性
    if (!account || !password) {
        ctx.status = 400;  //设置http的状态码 400前端错误
        ctx.body = {
            message: '账号密码不能为空'
        }
        return
    }
    const phonereg = /^1[3-9]\d{9}$/
    const emailreg = /^[1-9]\d{4,10}@qq\.com$/
    if (!phonereg.test(account) && !emailreg.test(account)) {
        ctx.status = 400;
        ctx.body = {
            message: '账号格式错误'
        }
        return
    }
    //去数据库中查询是否存在相同的账号密码
    const res = await findUserByAccount(account)
    console.log(account, password);

    console.log(res)
    if (!res) {
        ctx.status = 400
        ctx.body = { message: '账号不存在' }
        return;
    }
    //校验密码
    const ok = await bcrypt.compare(password, res.password_hash)
    console.log(ok)

    if (!ok) {
        ctx.status = 400;
        ctx.body = {
            message: '密码错误'
        }
        return;
    }



    //生成一个token
    const token = jwt.sign({ id: res.id, account: res.account }, 'shhhhh', { expiresIn: '7d' });
    ctx.body = {
        code: 1,
        message: '登录成功',
        token,
        user: {
            id: res.id,
            account: res.account
        }
    }
    console.log('登陆请求')
}


async function getCaptcha(ctx) {
    //生成图形验证码
    console.log('GET : getCaptcha请求成功')
    try {
        const captcha = generateCaptcha()
        ctx.body = {
            code: 1,
            captchaId: captcha.id,
            captchaSvg: captcha.svg
        }
    } catch (error) {
        ctx.status = 500
        ctx, body = {
            code: 0,
            message: '生成验证码失败',
            error: error.message
        }
    }


}

async function register(ctx) {
    console.log('注册请求成功');

    const { nickname, account, password, captchaCode, captchaId } = ctx.request.body
    if (!nickname || !account || !password || !captchaCode || !captchaId) {
        ctx.status = 400
        ctx.body = {
            code: 0,
            message: '请输入完整信息'
        }
        return
    }

    const captchaResult = verifyCaptcha(captchaId, captchaCode)
    if (!captchaResult.vald) {
        //如果验证失败 ，则返回错误
        ctx.status = 400
        ctx.body = {
            code: 0,
            message: captchaResult.message,
        }
        return
    }

    //判断账号是否存在
    const exited = await findUserByAccount(account)
    if (exited) {
        ctx.status = 400
        ctx.body = {
            code: 0,
            message: '账号已存在'
        }
        return
    }

    // 加密密码
    const password_hash = await bcrypt.hash(password, 10)

    //写入数据库
    try {
        const user = await createUser({ account, password_hash, nickname })
        ctx.body = {
            message: '注册成功',
            user,
            code: 1,
        }
    } catch (error) {
        ctx.status = 500
        ctx.body = {
            message: "服务器异常",
            code: 1,
        }
    }

}

module.exports = {
    login,
    register,
    getCaptcha
}