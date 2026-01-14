const svgCaptcha = require('svg-captcha');

// 存储验证码，用于后续校验
const captchaStore = new Map()  // Redis 缓存才是最优解  所以

// 验证码有效期
const CAPTCHA_EXPIRE_TIME = 5 * 60 * 1000

function generateCaptcha() {
    const captcha = svgCaptcha.create(
        {
            //详情设置 请看 npm svg-captcha
            size: 4, //验证码输了
            ignoreChars: '0o1il',
            noise: 2,
            color: true,
            background: '#cc9966'
        }
    )
    // svg.create() 返回结果是一个对象 {
    // data: string // svg path data
    // text: string // captcha text
    //}

    // 生成一个唯一 ID
    const cpatchaId = `captcha_${Date.now()}_${Math.random.toString(36).substring(2, 9)}`

    const expireAt = Date.now() + CAPTCHA_EXPIRE_TIME

    //  讲验证码存到map中
    captchaStore.set(cpatchaId, {
        text: captcha.text.toLocaleLowerCase(),
        expireAt,
    })


    // 清理map中过期的验证码

    setTimeout(() => {
        if (captchaStore.has(cpatchaId)) {
            captchaStore.delete(cpatchaId)
        }
    }, CAPTCHA_EXPIRE_TIME)
    return {
        id: cpatchaId,
        svg: captcha.data
    }
}

function verifyCaptcha(captchaId, captchaCode) {
    let vald = true
    let message = '验证成功'
    if (captchaStore.has(captchaId)) {
        const stored = captchaStore.get(captchaId)
        if (stored.text.toLocaleLowerCase().trim() != captchaCode) {
            vald = false
            message = '请输入有效验证码'
            captchaStore.delete(captchaId)
        }
    }
    else {
        vald = false
        message = '验证码已过期'
    }
    return {
        vald,
        message,
    }
}
module.exports = {
    generateCaptcha,
    verifyCaptcha
}