#   类型

1. 简单类型 
number string boolean undefine null  symbol bigint（超出2^53 次方后的数字） 

2. 引用类型
function，object，array，set，map等等

# 类型判断
## typeof()方法
- 原始类型：除了null以外都可以准确判断
- 引用类型：除了function类型以外都无法判断 
- 为什么会出现？typeof会通过将值转化为二进制判断类型，对于二进制数据前三位是零的统一识别为对象，
## instanceof()
 - x instanceof X ,能用来判断引用类型，无法判断原始类型。
 - instanceof 通过隐式原型链的查找来判断x是否隶属于X这个类型
## Object.prototype,toString.call(x)
函数内部执行的步骤
- 如果传入值为undefined，则返回字符串"[object Undefined]".
- 如果传入值为null，则返回字符串"[object Null]".
- 将this值传递给ToObject函数，设 O 为调用 ToObject 的结果，
   即 const o = ToObject（this） 
- 设一个变量 class 为 O 内部属性[[class]]的属性值. 即 const class = O.[[class]]
   （class 值为 创建该对象 的 构造函数名）
- 最后返回一个字符串，该字符串由三部分组成 ['[object'+ class +']'] 

# call 函数再谈
- 利用隐式绑定模拟call函数的实现 

# Array,isArray(x)
 -  原理 x.__proto__ == Array.prototype
