const http = require('http')

const server = http.createServer((req, res) => {
    
  res.end(JSON.stringify({
    name: '张三',
    age: 18
  }))

})

server.listen(3000, () => {
  console.log('server is running at http://localhost:3000');
})