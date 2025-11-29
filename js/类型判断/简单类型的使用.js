let num=123;
let str= "xxxx";
let bool= true;
let u= undefined;
let nu=null;

// symbol 类型的使用，定义一个独一无二的值
let sy=Symbol(1);
let sy2=Symbol(2);//sy != sy2


// Bigint的使用 超出2**53 的值 原始类型无法表示

let numn= 2n**54n;//在末尾数字后加n
console.log(numn)