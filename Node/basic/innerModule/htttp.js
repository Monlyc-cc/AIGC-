// 不加密的数据发送
const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url == '/home') {
        res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'}) // 告诉客户端，我返回到数据是html类型
        res.end('<h2>首页</h2>')
    }
    else
    {
        res.end('hello world')
    }
})

server.listen(3000, () => {
    console.log("server is running http://localhost:3000")
})

