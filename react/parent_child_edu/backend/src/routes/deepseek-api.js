const Router = require('koa-router');
const { verifyToken } = require('../utiles/jwt.js')
const {deepseekChat}=require('../controllers/deepseekControllers.js')
const router = new Router(
    {
        prefix: '/api/deepseek'
    }
);
router.post('/chat',verifyToken,deepseekChat)
module.exports = router