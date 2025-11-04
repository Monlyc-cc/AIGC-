//块级作用域（死区）

if(true)
{
    var a=1;
}
console.log(a);// 1

for(var i=0;i<1;i++)
{
    var b=100;
}
console.log(b);// 100

//let 声明的变量在{}中时，会在{}内形成一个死区，内部函数无法访问外部元素
if(true)
{
    let d=1;
}
console.log(d);//报错
