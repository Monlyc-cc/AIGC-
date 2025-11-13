function foo() {
    var a = 1
    let b = 2
    {
        let b = 3
        var c = 4
        let d = 5
        console.log(a);
        console.log(b);
    }
    console.log(b);
    console.log(c);
    console.log(d);
}
foo()


//let声明的变量会放进词法环境中，词法环境本质上是一个小的调用栈，meimei