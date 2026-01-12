const {findUserByPhone} =require('../models/userModel.js')
const jwt =require('jsonwebtoken')
const bcrypt=require('bcrypt')
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
    if (!phonereg.test(account) && !emailreg.test(account)){
        ctx.status=400;
        ctx.body={
            message:'账号格式错误'
        }
        return
    }
    //去数据库中查询是否存在相同的账号密码
    const res= await findUserByPhone(account)
    console.log(account,password);
    
    console.log(res)
    if(!res)
    {
        ctx.status=400
        ctx.body={message:'账号不存在'}
        return;
    }
    //校验密码
    const ok =await bcrypt.compare(password,res.password_hash)
    console.log(ok)

    if(!ok)
    {
        ctx.status=400;
        ctx.body={
            message:'密码错误'
        }
        return;
    }


    
    //生成一个token
    const token = jwt.sign({id:res.id,account:res.account }, 'shhhhh',{expiresIn:'7d'});
    ctx.body ={
        code:1,
        message:'登录成功',
        token,
        user:{
            id:res.id,
            account:res.account
        }
    }
    console.log('登陆请求')
}
function register(ctx) {

}

module.exports = {
    login,
    register,
}