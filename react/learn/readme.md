# 什么是 react
1. 一个js框架，框架被打造出来，为了提高js开发效率
2. JSX,让js和html的交互开发变得更简便

# 特点
1. 声明式UI,直接利用{} 在html中开一个js空间使用
2. 组件化 （像搭积木一样开发整个头部）
3. 跨平台（）

# creat-react-app 包 
1. 利用这个包可以构建一个react项目
2. 已经被抛弃

# Vite 利用 Vite构建一个react项目 的结构


- Package.json  记录项目依赖有哪些
- Package-lock.josn  记录依赖来源（从何而来）
- .jsx 让html与js可以写在一起
- react将函数体当做一个标签使用


# jsx
1. jsx == js + xml(html)
2. main.jsx 是整个项目的入口
3. jsx 只能放表达式，不能放语句
4. 列表的循环渲染
5. 条件渲染
6. 样式处理
浏览器 无法读懂jsx文件。
我们写的所有组件都会先被react解析器编译，然后交给浏览器
npm run dev