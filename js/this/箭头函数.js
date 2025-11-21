
function foo() {
    var bar = () => {
        this.a=2;
    }
    bar()
}
foo.bar();

//箭头函数内部无法拥有this，
// 箭头函数中不存在this关键字， this是从全局作用域下找到的

obj={
    a:1,
    baz:foo,
}
obj.baz();
console.log(obj);




