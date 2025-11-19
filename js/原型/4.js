let obj={}
function Car(){
    Car.call(obj)
    this.name='su7'
}
const car =new Car()
//创建了一个空对象 obj
//使用object.call(obj),将函数内this指向obj
//执行函数真的步骤
//将obj.__proto__=Car.prototype，将obj对象的隐式原型，赋值为显式原型。
//return obj