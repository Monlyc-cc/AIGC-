//string与字符串格式化输出
let myName='张三';
let str='我是'+myName;//利用+拼接字符串
let str1 =`我是${myName}`//利用·· 包裹的数据，使用${  }进行格式化输出


//number类型
let num=123;

console.log(myName+num);//string+number,会将字符串与数字进行拼接。

//boolean类型
let bool=true;

//undefined(本身是一个值，也是一种类型)，同理 null
//null(空值) //类型也是null



//Symbol类型
let s=Symbol(123);
let t=Symbol(123);
console.log(s===t);//false

//Bigint大整型
let big=123n;
let xxx=2n**53n;
console.log(xxx);//9007199254740992n


