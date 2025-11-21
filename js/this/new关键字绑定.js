function Person()
{
    this.name="张三"
}
let p=new Person();
//new的作用
//1. 创建一个空对象(obj)
//2. 将构造函数内部的this指向空对象(obj) == Person.call(obj)
//3. 执行函数
//4. 将obj的隐式原型指向显式原型 ==   obj.__proto__ = Person.Prototype
//5. 返回obj      ==     return obj
