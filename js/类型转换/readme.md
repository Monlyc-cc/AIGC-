# == vs ===
 ==： 1=='1',[] == 0 居然是true
 ===： 1==='1' []===0  ，得到false，还得是“===”严谨

 == 在判断值的过程中会发现隐式类型转换

 # 类型转换
 1. 隐式类型转换
- 引用类型转原始值
- 原始到原始

 2. 显式类型转换，
- 引用类型转原始值
- 原始到原始
# 类型转换似乎都是 （原始值/引用类型） => 原始值 的过程



#   显式类型转换函数
1. Number（obj）{ 
    res = Toprimitive(obj)
    return ToNumer(res)
    }

2. String (obj){  
    res = Toprimitive(obj)
    return ToString(res)
    }
3. Boolean(obj){
    res = Toprimitive(obj)
    return ToBoolean（res）
    }
# Toprimitive(obj) 的作用 
- 将输入对象 转化为 原始类型
1. 输入原始类型返回，原始类型
2. 输入引用类型，返回原始类型

执行步骤
1.  如果obj.valuOf() 为原始类型，则返回
2.  否则 res = obj.toString（）， 返回res

# 原始=>原始 的函数,ToBoolean() ToString（） ToNumer()
ToBoolean， 1 ,“xxx” 非空则 =》 true  0 ，null， undefine =》fasle
ToString  true，12313，null，undefined =》 string 
ToNumer   “111” =》111 ， null，undefined “x111”（存在字符） =》NaN
           '' => 0


# 什么时候发生隐式转换
1. 四则运算 +-*%
2. 判断运算 == > < >= <=, 最终目标转为数字

# +
1. 二元运算 value1=Toprimitive(obj)  value2=Toprimitive(obj) 
当 value1 或者 value2 其中原始值存在字符串
则左右两边都要转为字符串 res str1 + str2


