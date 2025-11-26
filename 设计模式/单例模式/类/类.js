// es6往后，引入了与java一样的 类  消灭了函数的二义性
class Person{
    run()
    {
    console.log("running")
    }
    //构造器
    constructor(){
        this.name="子涵";
    }
}
Person.prototype.x=function()
{
    console.log("xxxx")
}
Person.say=()=>{
    console.log('hello');
}
let p= new Person();
console.log(p);
p.x();
p.run();
Person.say();
