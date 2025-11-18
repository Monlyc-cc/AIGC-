Car.prototype.name='奔驰';
function Car(color)
{
    this.color=color    
}
let car = new Car('pink');
//将函数的固定属性全部存到原型中，动态属性存到实例中。大大减少代码量
console.log(car.name)