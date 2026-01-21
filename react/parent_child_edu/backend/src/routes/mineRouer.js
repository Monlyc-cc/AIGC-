const Router = require('koa-router');
const {updateUser,updatePassword}=require('../controllers/mineController.js')
const { verifyToken } = require('../utiles/jwt.js')
const router = new Router(
    {
        prefix: '/api/mine'
    }
);
router.post('/updateAvatar',verifyToken,updateUser)
router.post('/updateNickname',verifyToken,updateUser)
router.post('/updatePassword',verifyToken,updatePassword)
module.exports = router