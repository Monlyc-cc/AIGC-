function bar() {
    console.log(myName);
}
function foo() {
    var myName = '小君'
    bar()
}
var myName = '冯总'
foo()


//outer字段指向自身外层作用域
//词法作用域，指的是函数定义时写在哪个作用域，outer指的就是这个函数的词法作用域