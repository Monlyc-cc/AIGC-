// 创建所有跟账号有关的接口
const Router = require('koa-router');
const { login, register, getCaptcha, getUserInfo } = require('../controllers/authController.js')
const { verifyToken } = require('../utiles/jwt.js')

const router = new Router(
    {
        prefix: '/api/auth'
    }
);

//登录接口
router.post('/login', login)
//验证码接口
router.get('/captcha', getCaptcha)
// 注册接口
router.post('/register', register)
// 获取用户信息的接口
router.get('/info', verifyToken,getUserInfo) 
// router.get('路径’,func,func2)  fun1 fun2 按顺序执行，但是 fun1中的next必须执行，不然不会继续往下执行

module.exports = router

//定义路由接口并抛出