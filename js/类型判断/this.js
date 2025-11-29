function foo(x,y)
{
    return this.a+x+y
}
obj={
    a:1,
    foo:foo,
}

//foo.call(obj);

//定理
Function.prototype.myCall=function(context,...args)
{

    //将调用mycall函数的this 指向context上
    //利用隐式绑定规则  当foo调用call函数时的，call中的this将指向foo，
    //则可以利用this，将foo函数添加context中，通context调用用foo函数
    //则利用隐式绑定规则，foo中的this被绑定到context上。
    context=context||global;
    const fn=Symbol('fn')
    context[fn]=this;
    const res=context[fn](...args);
    delete context[fn]
    return res;

}
console.log(obj.foo())
console.log(foo.call(obj,1,2))
console.log(foo.myCall(obj,1,2))
console.log(obj)
console.log(foo.call())
console.log(foo.myCall())
console.log(foo.call(obj))



