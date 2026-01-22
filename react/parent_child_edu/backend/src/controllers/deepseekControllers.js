const OpenAI = require('openai');
const dotenv = require('dotenv')
dotenv.config({
    path: ['.env.local', '.env']
})
const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey: process.env.DEEPSEEK_API_KEY,
});
async function deepseekChat(ctx) {
    //从请求体重提取出 用户的message
    const { message } = ctx.request.body
    if (!message) {
        ctx.status = 400;
        ctx.body = {
            code: 0,
            message: '消息不能为空'
        }
        return
    }
    // 将message 发给 deepseek 
    try {
        const completion = await openai.chat.completions.create({
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { "role": "user", "content": message }
            ],
            model: "deepseek-chat",
        });
        console.log(completion.choices[0].message.content);
        ctx.body = {
            code: 1,
            message: completion.choices[0].message.content
        }
    }
    catch (error) {
        ctx.status = 500;
        ctx.body = {
            code: 0,
            message: 'deepseek服务错误',
            error: error.message
        }
    }
}


module.exports = {
    deepseekChat
}
