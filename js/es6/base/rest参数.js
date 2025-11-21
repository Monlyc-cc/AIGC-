//常规的函数定义
function boo()
{

}

//es6 新的函数定义方式
//箭头函数

let baz=(x,y)=>{
    return x+y;
}
console.log(baz(1,2))
//rest 参数
function boo3(a,b,...ags)
{
    console.log(a,b,ags)
}
boo3(1,3,4,51,1)




//arguments 类数组对象 函数中存在一个类数组对象 arguments 
function boo2()
{
    let sum=0;
    for(let i=0;i<arguments.length;i++)
    {
        sum+=arguments[i];
    }
    return sum;
}
console.log(boo2(1,2,3,4,5))