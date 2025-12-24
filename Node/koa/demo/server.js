// 1. 引入核心依赖
const Koa = require('koa'); // Koa 核心
const Router = require('koa-router'); // 路由中间件（Koa 无内置路由）
const {koaBody} = require('koa-body'); // 解析请求体（处理 POST/PUT 等请求参数）

// 2. 创建 Koa 实例
const app = new Koa();
// 3. 创建路由实例（可指定前缀，比如所有接口都以 /api 开头）
const router = new Router({ prefix: '/api' });

// 4. 注册中间件：先解析请求体（必须在路由前，否则解析不到参数）
app.use(koaBody());

// 5. 定义接口：GET 接口（查询资源）
// 示例：获取用户列表 /api/users
router.get('/users', async (ctx) => {
  // ctx（上下文）：Koa 封装的请求/响应对象
  // ctx.query：获取 GET 请求的 URL 参数（如 /api/users?page=1&size=10）
  const { page = 1, size = 10 } = ctx.query;
  
  // 模拟返回数据（实际项目可替换为数据库查询）
  ctx.body = {
    code: 200,
    msg: '获取用户列表成功',
    data: {
      page: Number(page),
      size: Number(size),
      list: [
        { id: 1, name: '张三', age: 20 },
        { id: 2, name: '李四', age: 22 }
      ]
    }
  };
});

// 6. 定义接口：POST 接口（创建资源）
// 示例：新建用户 /api/users
router.post('/users', async (ctx) => {
  // ctx.request.body：获取 POST 请求体（需 koa-body 解析）
  const { name, age } = ctx.request.body;
  
  // 校验参数（简单示例）
  if (!name || !age) {
    ctx.status = 400; // 设置 HTTP 状态码
    ctx.body = { code: 400, msg: '姓名和年龄不能为空' };
    return;
  }
  
  // 模拟创建成功（实际项目可写入数据库）
  ctx.status = 201; // 201 表示资源创建成功
  ctx.body = {
    code: 201,
    msg: '创建用户成功',
    data: { id: 3, name, age }
  };
});

// 7. 注册路由中间件到 Koa 实例
app.use(router.routes());
// 可选：注册路由允许的请求方法（如 OPTIONS），避免跨域预检报错
app.use(router.allowedMethods());

// 8. 启动服务，监听 3000 端口
const port = 3000;
app.listen(port, () => {
  console.log(`✅ 服务已启动：http://localhost:${port}`);
});