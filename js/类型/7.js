//let实现块级作用域，变量不影响全局，减少声明变量的负担
for(let i=0;i<10;i++){
    console.log(i);
}
for(let i=0;i<10;i++){
    console.log(i);
}

//var声明变量影响全局，为实现多个for循环，不得不声明多个变量
for(var x=0;x<10;x++)
{
    console.log(x);
}
for(var y=0;y<10;y++)
{
    console.log(y);
}