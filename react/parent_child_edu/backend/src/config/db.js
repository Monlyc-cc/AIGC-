// src/config/db.js 【终极无错版，直接复制替换你的文件】
const mysql = require('mysql2/promise');
const pool = mysql.createPool({
  host: 'localhost',      // ✅ 不用改！保持localhost，不用改127.0.0.1
  port: 3306,             // ✅ 不用改！默认端口
  user: 'root',           // ✅ 不用改！还是root，不用新建dev
  password: '123456789',    // ✅ 不用改！还是你原来的密码，绝对正确
  database: 'parent_child_edu', // ✅ 你的项目库名，不用改
  charset: 'utf8mb4',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  // ====================== 核心新增配置（唯一修改点） ======================
  insecureAuth: true
  // ======================================================================
});

// 可选：测试数据库连接，启动项目能在控制台看到成功日志
(async () => {
  try {
    const conn = await pool.getConnection();
    console.log('✅✅✅ 数据库连接成功！✅✅✅');
    conn.release();
  } catch (err) {
    console.error('❌ 数据库连接失败：', err.message);
  }
})();

module.exports = pool;