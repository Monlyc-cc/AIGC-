const mysql = require('mysql2/promise');

// 创建连接池，设置连接池的参数
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password:'123',
  database: 'parent_child_edu',
  waitForConnections: true,
  connectionLimit: 10,
  port:3306,

});
module.exports=pool;