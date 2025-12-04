# 拷贝
- 只针对引用类型
- 基于原对象，拷贝得到一个新对象

# 浅拷贝
- 新对象受原对象影响（只拷贝了原对象的第一层，里面的子对象拷贝的还是引用地址）
1. [].slice(0),实现的就是一个浅拷贝的效果
# 深拷贝
- 层层浅拷贝，直到拷贝原始类型。
1. structuredClone（） -- 无法拷贝函数，无法拷贝symbol类型
2. JSON.parse(JSON.stringify(obj)) -- 无法处理 bigint,undefined,NaN,Infinity,function.主要用于前后端链接，将后端数据传来的字符串，转换为对象，间接实现了深拷贝。