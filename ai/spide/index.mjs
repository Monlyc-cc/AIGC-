//爬豆瓣电影排行榜，将豆瓣排行榜8分以上的电影爬出来
// 解决问题必备的三种方案 1 利用已存在工具包或数据结构 2 利用他人已设计好的工具。  3 自己手搓工具使用
import {createCrawl,createCrawlOpenAI} from 'x-crawl' //爬虫工具
// ps： 我怎么知道应该导入什么去实现功能呢？
// 可以查看官方文档，里面有写如何调用。
import dotenv from 'dotenv'// 环境变量
dotenv.config()

// ### 1 创建爬虫
const crawlApp = createCrawl(
    {
        maxRetry:3, //重试次数
        intervalTime:{min:1000,max:3000} // 重试间隔时间
    }
)
// ### 2 创建openai爬虫
const crawlopenai = createCrawlOpenAI(
    {
        clientOptions:{  
            //配置参数
            apiKey:process.env.OPENAI_API_KEY,
            baseURL:process.env.OPENAI_API_BASE_URL
        },
        defaultModel:'gpt-3.5-turbo'//使用更通用的模型
    }
)

//   ##3使用爬虫
crawlApp.crawlPage('https://movie.douban.com/chart').then(async(res)=>{
    //获取页面内容
    //console.log(res)
    const{page,browser}=res.data

    //获取页面结构(直接查看原网址代码结构，发现目标数据在article容器中)
    
    //获取article容器的html代码
    const  targetSelector = '.article'
    await page.waitForSelector(targetSelector)  


    //将article容器的代码转化为字符串
    const highlyhtml = await page.$eval(targetSelector,(el)=>el.innerHTML)
    //console.log(highlyhtml)
    

    //让ai解析这份html字符串，解析出我们想要的数据
    try {
        const result = await crawlopenai.parseElements(
            highlyhtml, 
            '获取电影评分,将评分不小于8.0的电影的图片链接,电影名称,电影评分获取到。输出格式为:[{img:"图片链接",name:"电影名称",score:"电影评分"}]'
        )
        
        console.log('AI解析结果：', result);
    } catch (error) {
        console.error('OpenAI API调用失败：', error.message);
    }
    
    await browser.close();
})