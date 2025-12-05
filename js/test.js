function foo() {
    let a = 0;
    function bar() {
        console.log(a);
    }
    return bar
}

let bar = foo();
bar()
