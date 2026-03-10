const http = require('http');
const { json } = require('stream/consumers');
const server=http.createServer((req, res) => {
    console.log(res);
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', '*') // 运行前端的请求方法
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    res.end(JSON.stringify({
        name:'张三'
    }))
})
server.listen(3000, () => {
    console.log('server is running at http://localhost:3000');
})
