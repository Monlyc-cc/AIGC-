const Router=require('koa-router');
const {recognition} = require('../controllers/cozeController.js');
const router=new Router(
    {
        prefix:'/api/coze'
    }
);

//ai 识物的接口
router.post('/recognition',recognition)
//get 与 post 的区别
// get 请求会把请求体的数据全部放在http地址之后传给后端，导致url过长，会导致url失效
// post 请求不会
module.exports=router