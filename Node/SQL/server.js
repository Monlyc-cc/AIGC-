const http = require('http')
const { URL } = require('url')
const mysql = require('mysql2')
const server = http.createServer((req, res) => {
    // 解决跨域问题
    res.setHeader('Access-Control-Allow-Origin','*')
    // req 请求体
    // res 返回体
    //判断前端请求地址
    const query = new URL(req.url, `http://${req.headers.host}`).searchParams;
    console.log(query)
    if (req.url.startsWith('/login')) {
        //解析出name 与 password
        const name = query.get('name')
        const password = query.get('password')


        //连接数据库 
        //创建连接对象
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'demo',
            password: '123'
        });
        connection.query(
            'SELECT * FROM `users` WHERE `name` = "' + name + '"',
            function (err, results) {
                if (err) {
                    console.log(err)
                }
                else {
                    if (results[0].password == password) {
                        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }) // 告诉客户端，我返回到数据是html类型
                        res.end(JSON.stringify(['登录成功']))
                    }
                    else {
                        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }) // 告诉客户端，我返回到数据是html类型
                        res.end(JSON.stringify(['账户或密码错误']))
                    }
                }

            }
        );

    }

    console.log(query)
})
server.listen(3000, () => { console.log('server 服务启动成功') })

