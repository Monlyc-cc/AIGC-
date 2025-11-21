var obj={
    a:1,
}

function foo()
{
    console.log(this.a);
}

//call 函数的使用 ，将foo函数中的this显式绑定到obj对象上，并直接触发foo函数
foo.call(obj)


//call函数，能够帮原函数接收参数
function foo2(x,y)
{
    console.log(this.a,x+y)
}
foo2.call(obj,1,2)