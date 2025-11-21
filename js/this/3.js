//不看函数调用在哪儿、声明在哪儿， 只看函数被谁调用，即调用的方式
var a=1;
function foo()
{
    console.log(this.a)
}
function bar()
{
    var a=2;
    foo()
}
bar()