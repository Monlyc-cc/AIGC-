function foo(a,b)
{
    console.log(a);// 1
    c=0;
    var c;
    a=3;
    b=2;
    console.log(b);//2
    function b(){};
    console.log(b);//2
}
foo(1);

//创建空对象Ao
Ao={

}
//将声明的变量塞入
Ao.c=undefined;
Ao.b=undefined;
Ao.c=undefined;
//同步实参与形参值；
Ao.a=1;
Ao.b=undefined;
//将声明的函数塞入
Ao.b=function b(){};

//正式执行前Ao对象内部情况；
Ao=
{
    a:1,
    b:function b(){},
    c:undefined,
}
//正式执行的步骤
console.log(Ao.a);//console.log(a)    1
Ao.c=0;
Ao.a=3;
Ao.b=2;
console.log(Ao.b);//console.log(b); 2
console.log(Ao.b);//console.log(b); 2



