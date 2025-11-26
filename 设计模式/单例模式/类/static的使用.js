class Person
{
    //使用static修饰的变量不可被子对象访问,等于把函数添加在函数对象上
    static name='子涵'
    constructor()
    {

    }

}
let p=new Person()
console.log(p.name)