// 创建所有跟账号有关的接口
const Router=require('koa-router');
const {login,register} =require('../controllers/authController.js')

const router=new Router(
    {
        prefix:'/api/auth'
    }
);

router.post('/login',login)
router.post('/register',register)


module.exports=router