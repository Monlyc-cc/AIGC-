Function.prototype.myCall=function(context,...args){
    context=context||window; // global
    let fn=Symbol('fn') //创建一个独一无二的函数名，防止往context对象添加属性时覆盖已有数学
    context[fn]=this;//将调用myCall的函数添加进context对象
    const res=context[fn](...args) //通过context对象调用函数，使得函数中的this隐式绑定到context上，并接收最后的结果
    delete context[fn]  //删除前几步添加进context中的函数
    return res  //返回执行结果
};
function foo(x,y)
{
    console.log(x+y);
}

function bar(...args)
{
    foo(...args)
}

bar(1,2)


Function.prototype.myCall=function(context,...args){
    context=context||window;
    const fn=Symbol('fn'); 
    context[fn]=this;
    context[fn](...args);
    delete context[fn]
};
