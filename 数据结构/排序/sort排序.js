let arr=[1,3,4,2,5];
//sort方法
console.log(arr.sort());
console.log(arr);//sort方法会影响原数组

//sort支持传入函数
let arr2=[1,3,4,2,5];
console.log(arr2.sort((a,b)=>{return a-b})) //数组正序
console.log(arr2.sort((a,b)=>{return b-a}))// 数组倒序


