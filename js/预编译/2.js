function fn(a) {
  console.log(a);
  var a = 123
  console.log(a);
  function a() {}
  var b = function() {}//函数表达式，先声明b，在赋值一个函数表达式
  console.log(b);
  function c() {}
  var c = a
  console.log(c);
}
fn(1)

//函数编译时的步骤
//1. 函数执行前一步创建一个空的AO对象
Ao={

}
//2.将声明的变量作为属性名，值为undefined塞入Ao
AO={
    a:undefined,
    b:undefined,
    c:undefined,
}
//3 .统一实参与形参，fn（1），将实参1，传入实参a
AO[a]=1;
//4 .找函数声明，以函数名为key，值为函数体赛入Ao对象
Ao[a]=function a(){};
Ao[c]=function c(){};
AO={
    a:function a(){},
    b:undefined,
    c:function c(){},
}

//正式执行时
console.log(Ao[a]);
Ao[a]=123;
console.log(a);
b=function(){};
console.log(b);
c=a;