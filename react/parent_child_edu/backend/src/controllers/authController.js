
function login(ctx) {
    //解析请求体中的账号密码
    const { phone, password } = ctx.request.body
    //api不一定是自己人调用，可能是外人调用，所以后端需要验证数据的正确性
    if (!phone || !password) {
        ctx.status = 400;  //设置http的状态码 400前端错误
        ctx.body = {
            message: '账号密码不能为空'
        }
        return
    }


    const phonereg = /^1[3-9]\d{9}$/
    const emailreg = /^[1-9]\d{4,10}@qq\.com$/
    if (!phonereg.test(phone) && !emailreg.test(phone)) {
        ctx.status=400;
        ctx.body={
            message:'账号格式错误'
        }
        return
    }
    
    ctx.body = '登陆成功'
    console.log('登陆请求')
}
function register(ctx) {

}

module.exports = {
    login,
    register,
}