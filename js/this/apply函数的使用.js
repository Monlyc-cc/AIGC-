//apply函数作用与call无异，
//apply与call的区别 ，帮助foo2接收参数时
var obj={
    a:1,
}

function foo2(x,y)
{
    console.log(this.a,x+y)
}
foo2.apply(obj,[1,2])