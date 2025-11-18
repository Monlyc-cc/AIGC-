function Person(){
    this.name='xx';
}
Person.prototype.say=function()
{
    console.log("yyyy");
}
const p=new Person();
console.log(p);
p.say();
p.say="aaaa";//让p显式添加了一个属性
console.log(p.say)

const p2=new Person();
console.log(p2.say)
//由此可知，实例对象不能改动原型属性