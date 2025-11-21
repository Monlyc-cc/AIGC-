//独立调用
function foo() {
    console.log(this)
}

foo()


//不独立，调用
var obj={
    a:foo,
}
obj.a();
