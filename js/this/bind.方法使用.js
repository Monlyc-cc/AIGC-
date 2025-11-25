//bind 方法将foo中的this显式绑定到obj对象上，并返回相应函数，不影响foo函数本体。
var obj = {
    a: 1,
}
function foo(x, y) {
    console.log(this.a, x + y);
}
const bar = foo.bind(obj);
bar(1, 2)