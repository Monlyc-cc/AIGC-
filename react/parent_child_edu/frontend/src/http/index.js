import { Toast } from "antd-mobile";
import axios from "axios";

axios.timeout = 5000 // 超时时间
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
axios.interceptors.response.use((res) => {
    // 判断是否发生逻辑性错误

    if (res.data.code != 1) {
        console.log(res.data.code)
        Toast.show(
            {
                icon: 'fail',
                content: res.data.message
            }
        )
    }

    return res;
}, (err) => {
    //拦截程序性错误

    if (err.status != 200) {
        //http状态码 200 表示成功
        //此时后端存在程序性错误
        Toast.show({
            icon: 'fail',
            content: err.response.data.message
        })
        if (res.status == 416) {
            // 没有权限
            //重定向去到登录页面
            setTimeout(() => {
                window.location.href = '/login'
            },2000)
        }
    }
    return Promise.reject(err)

})

export default axios;

//后端错误类型
// 1。 程序性错误
//  - 后端代码执行崩溃
//2. 逻辑性错误
//  - 后端代码逻辑有误， 导致返回数据出错 