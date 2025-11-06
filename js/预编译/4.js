//console.log(a);
//var a = 1;
//function a() { };

//实际上的执行逻辑
//全局预编译:1.创建空的GO对象
//Go=
//{
    
//}

//全局预编译：寻找对象声明
//GO={
   // a:undefined,
//}
//全局预编译
GO=
{
    a:function (){},//函数声明加入时，因函数名与对象名相同，所以将属性名a对应的属性值修改了。
}

//解释执行
console.log(GO.a)//输出为函数 a()
