const db = require('../config/db.js')

async function findUserByPhone(phone) {
    try {
        // 关于连接池初始化，请参阅上文
        const [rows] = await db.query(`SELECT id,password_hash,account FROM users WHERE account='${phone}' `);
        return rows[0]
        // 查询解析时，连接会自动释放
    } catch (err) {
        console.log(err);
    }
}

module.exports={
    findUserByPhone
}