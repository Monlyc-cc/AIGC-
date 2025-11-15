function fn() {
    console.log(myName);
}
function fn2() {
    var myName = '南北绿豆'
    bar()
}
var myName = '哈基米'
f2()


//outer字段指向自身外层作用域
//词法作用域，指的是函数定义时写在哪个作用域，outer指的就是这个函数的词法作用域