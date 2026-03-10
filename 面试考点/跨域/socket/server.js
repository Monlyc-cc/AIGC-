const websocket= require('ws');
const ws=new websocket.Server({port:3000});
ws.on('connection',(socket) => {
    console.log('有客户端连接');
    socket.on('message',(msg) => {
        console.log(msg.toString());
    })
    setInterval(()=>{
        socket.send(JSON.stringify({time:new Date().getTime()}));
    },2000)
})

ws.on('close',() => {
    console.log('有客户端断开连接');
})
