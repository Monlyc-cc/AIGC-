//数值交换,解构赋值语句
//let a=1;
//let b=2;
//[a,b]=[b,a]
//console.log(a,b)

//简单数据类型的解构赋值
let arr=[1,2,3];
[arr[0],arr[2]]=[arr[2],arr[0]];
console.log(arr);


let [x,y,z]=[1,2,3];
console.log(x,y,z);

let [a,[b,[c]],d]=[1,[2,[3]],4]
console.log(a,b,c,d);


//对象的解构赋值
let obj={name:"x",age:1,like :'cc',}
let {name,age,like}=obj
console.log(name,age,like);
let {name:user,age:size,like:thing}=obj;
console.log(user,size,thing);


//当key与value重合时，我们可以使用: 来指定变量名
let myname='x';
let o={
    myname,
}
console.log(o);


// 解构赋值，在函数中的应用
function fn([x,y])
{
    return x+y;
}