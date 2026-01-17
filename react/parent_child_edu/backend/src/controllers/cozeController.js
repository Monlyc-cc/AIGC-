const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config({
    path: ['.env.local', '.env']
})
async function recognition(ctx) {
    const { img } = ctx.request.body

    const url = 'https://2st62bkc54.coze.site/run'
    // 发起一个post请求

    try {
        console.log('开始请求工作流...');
        console.log('URL:', url);
        console.log('Token前缀:', process.env.VITE_COZE_IMAGE_TO_TEXT_AND_VOICE);
        console.log('图片数据长度:', img ? img.length : 0);

        const res = await axios({
            method: 'post',
            url: url,
            data: { "image_data": img },
            headers: {
                'Authorization': `Bearer ${process.env.VITE_COZE_IMAGE_TO_TEXT_AND_VOICE}`,
                'Content-Type': 'application/json'
            }
        });
        ctx.body = {
            code: 1,
            data: res.data
        }
        console.log('请求成功:', res.data);
    } catch (error) {
        console.error('详细错误信息:');
        console.error('- 状态码:', error.response?.status);
        console.error('- 响应数据:', error.response?.data);
        console.error('- 请求头:', error.config?.headers);
        ctx.status = 500;
        ctx.body = {
            code: 0,
            message: error.message
        }
        throw error;
    }
}

module.exports = {
    recognition
}