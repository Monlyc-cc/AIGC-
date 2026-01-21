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


//更新数据
async function updateUserInfo(id, updates) {
    
    const allKeys = {
        avatar: 'avatar',
        nickname: 'nickname',
        password_hash: 'password_hash',
        avatar: 'avatar'
    }
    let keys = Object.keys(updates)
    let values = Object.values(updates)




    //校验前端传来的key是否正确
    keys.forEach((item, index) => {
        //判断keys 是否是都有效 ，无效则报错 
        if (!allKeys[item]) {
            throw new Error("更新字段不存在");
        }
    })
    //正确则生成sql语句
    const _sql = keys.map((item, index) => {
        return `${item}=?`
    }).join(',')



    // 校验结束后 向数据库更新数据
    try {
        //更新数据库信息
        const res = await db.execute(`UPDATE users SET ${_sql} WHERE id=?`, [...values, id])
        return res[0]
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    findUserByAccount,
    createUser,
    findUserById,
    updateUserInfo
}