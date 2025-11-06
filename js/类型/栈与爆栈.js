var a=2;
function add()
{
    var b=10;
    return a+b;
}
console.log(add());


//调用栈

//爆栈
function b()
{
    b();
}
b();
