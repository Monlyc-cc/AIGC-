// 加密式的数据发送
const https=require('https')
https.get('https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&count=3&from=1&aid=2608&uuid=7145810834685003271&spider=0',(res)=>{
    console.log(res)
    let content='';
    res.on('data',(chunk)=>{
        //后端中，如果请求资源过多不会一次性发送，而是分chunk发送， 要将chunk合并后使用
        content+=chunk //发生了隐式转换 将chunk转化为了字符串
    })
    res.on('end',()=>{
        console.log(content)
    })
})