const db = require('../config/db.js')

async function findUserByAccount(account) {
    try {
        // 关于连接池初始化，请参阅上文
        const [rows] = await db.query(`SELECT id,password_hash,account FROM users WHERE account='${account}' `);
        return rows[0]
        // 查询解析时，连接会自动释放
    } catch (err) {
        console.log(err);
    }
}
async function createUser({ account, password_hash, nickname }) {
    try {
        // 关于连接池初始化，请参阅上文
        const res = await db.execute(`INSERT INTO users(account,password_hash,create_time,nickname) VALUES(?,?,NOW(),?)`, [account, password_hash, nickname]);
        console.log(res);
        if (res.affectedRows) {
            return {
                id: insertId,
                account
            }

        }
        // 查询解析时，连接会自动释放
    } catch (err) {
        console.log(err);
    }
}

async function findUserById(id) {
    try {
        const [rows] = await db.query(`SELECT *  FROM users WHERE id='${id}' `);
        return rows[0]
    }
    catch (error) {
        console.log(error);
    }
}
module.exports = {
    findUserByAccount,
    createUser,
    findUserById
}