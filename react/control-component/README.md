# 表单处理 (通常用来描述输入框)
1. 受控组件：input 框自己的状态被React组件的状态控制
- 在组件中声明了一个状态
- 将状态数据设置为input 的value值
- 通过绑定 change 事件，在事件处理程序中利用事件参数e获取当前文本框内的值
- 最后将文本框的值作为状态的最新值
    - 这整个过程称为受控，input框内的值受到React组件状态的控制。
2. 非受控组件：通过手动操作 dom 的方式来获取文本框的值，文本框的值，不在受react组件中状态的影响。或者控制。

# __mock__
json-server db.json

- 删除
http://localhost:3000/data/1    // 1 为被删除的数据的id

- 搜索
http://localhost:3000/data/q?=xxx   // xxx 用户在输入的内容

- 获取完整列表数据
http://localhost:3000/data