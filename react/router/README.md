# 路由
以前是多页应用

后来是单页应用 只有 一个 html


http://localhost:5173/home 把关于about的组件加载到html中来
http://localhost:5173/about 把关于about的组件加载到html中来



url，所谓路由做的就是这个url变更，就会加载对应组件


react作用：将组件编译，加载到html中，是没有办法直接修改html。

# 页面 vs 组件

配路由的叫页面


1. BrowserRouter组件 一种路由模式 （history 模式）
2. Routes组件 提供一个路由出口，里面配置很多路由项
3. Route组件 每一个配置项
4. Outlet组件 二级路由出口
5. Link组件  会解析为a标签
6. 