import { Toast } from "antd-mobile";
import axios from "axios";

axios.timeout = 5000 // 超时
axios.defaults.baseURL = 'http://localhost:3000' //配置axios默认基础路径
axios.defaults.headers.post['Content-Type'] = 'application/json' //设置axios默认请求头


//设置 请求 拦截
axios.interceptors.request.use(request => {
    const token = localStorage.getItem('token')
    if (token) {
        request.headers.Authorization = token
    }
    return request;
})

//设置 响应 拦截
axios.interceptors.response.use((config) => {
    // 判断是否发生逻辑性错误
    if (config.response.data.code !== 1) {
        Toast.show(
            {
                icon: 'fail',
                content: config.response.data.message
            }
        )
    }
    return config.response;
}, (err) => {
    //拦截程序性错误

    if (err.status != 200) {
        //http状态码 200 表示成功
        //此时后端存在程序性错误
        Toast.show({
            icon: 'fail',
            content: err.response.data.message
        })
        return Promise.reject(response)
    }
})

export default axios;

//后端错误类型
// 1。 程序性错误
//  - 后端代码执行崩溃
//2. 逻辑性错误
//  - 后端代码逻辑有误， 导致返回数据出错 