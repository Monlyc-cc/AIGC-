//全局作用域下标识符num，无法访问被定义在函数内部的num

let num=1;
function fn()
{
    console.log(num);
}

