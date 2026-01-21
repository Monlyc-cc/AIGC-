const { updateUserInfo, findUserById } = require('../models/userModel.js')
const bcrypt = require('bcrypt')
//更新头像
async function updateUser(ctx) {
    const id = ctx.userId;
    const updates = ctx.request.body
    try {
        const res = await updateUserInfo(id, updates)

        if (res.affectedRows) {
            ctx.status = 200;
            ctx.body = {
                code: 1,
                message: '更新成功'
            }
            return
        }
        else {
            ctx.status = 400;
            ctx.body = {
                code: 0,
                message: '更新失败'
            }
        }
    }
    catch (error) {
        ctx.status = 500;
        ctx.body = {
            code: 0,
            message: error.message
        }
    }

}
async function updatePassword(ctx) {
    const id = ctx.userId;
    const { old_password, new_password, confirm_password } = ctx.request.body
    const { password_hash } = await findUserById(id)
    console.log(password_hash, old_password, password_hash);

    const ok = await bcrypt.compare(old_password, password_hash)


    console.log(ok);

    if (!ok) {
        console.log('原密码不正确');
        ctx.status = 400
        ctx.body = {
            code: 0,
            message: '原密码不正确'
        }
        return
    }

    if (new_password != confirm_password) {
        ctx.status = 400
        ctx.body = {
            code: 0,
            message: '新密码与确认密码不一致'
        }
        return
    }
    // 加密密码
    const new_password_hash = await bcrypt.hash(new_password, 10)
    const res = await updateUserInfo(id, { password_hash: new_password_hash })
    console.log(res);
    if (res?.affectedRows) {
        ctx.body = {
            code: 1,
            message: '更新成功'
        }
    }
}
module.exports = {
    updateUser,
    updatePassword
}