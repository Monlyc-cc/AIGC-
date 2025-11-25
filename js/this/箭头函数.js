


function foo() {
    var bar = () => {
        console.log(this)
    }
    bar();
}

obj = {
    a: 1,
    foo: foo,
}

obj.foo()

//箭头函数内部无法拥有this，
// 箭头函数中不存在this关键字， this是从全局作用域下找到的






