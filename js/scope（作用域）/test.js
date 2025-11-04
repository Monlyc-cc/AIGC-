//全局作用域与局部（函数作用域）作用域
var a=1;

function f()
{
    var a=2;
    console.log(a);
};

console.log(a);//1
f();//2

//函数的生命周期,(作用域只能由内往外查找)
var b=2;
function f1()
{
    var b=1;
}
console.log(b);// 2


//作用域链
function f2()
{
    var c=1;
    function xx()
    {
        console.log(c);// 1
    }
    xx();
}
f2();//1
//2
var d=2;
function f3()
{
    var d=1;
    yy()
}
function yy()
{
    console.log(d);// 2
}
f3();//2

//利用let声明变量
console.log(ee);//报错
let ee=1;

let cc=1;
cc=2;
console.log(cc);//2

//利用const声明变量，定量，不可修改
const ff=1;
ff=3;
console.log(ff);//报错