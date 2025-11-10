let a=new String(123);
console.log(a);

//string.length
console.log(a.length);
console.log(a[1]);

//字符串没有办法中间加，只能重构一个新字符串

// Array.from()
let b=Array.from(a);
console.log(b);

//string.split('object')
b=a.split('');
console.log(b);

//string.splice（）不会返回一个新数组
b=a.split('');
b.splice(1,0,'4')
console.log(b);
//数组转字符串
console.log( b.join('') )

//
