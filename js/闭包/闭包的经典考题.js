var arr = [];
for (var i = 1; i < 6; i++) {
    arr.push(function () {
        console.log(i);
    });

}

//run
for (let n = 0; n < arr.length; n++) {
    arr[n]();
}


var arr = [];
for (var i = 1; i < 6; i++) {
    function foo(j) {
        arr.push(function () {
            console.log(j);
        });
    }
    foo(i)//函数foo运行结束后，因为子函数引用了foo作用域中的变量，所以留下一个闭包供给子函数的使用。
}

//run
for (let n = 0; n < arr.length; n++) {
    arr[n]();
}