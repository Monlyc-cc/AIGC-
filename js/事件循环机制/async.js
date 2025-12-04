function a() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(1);
            resolve();
        },1000)
    })
}
function b()
{
    console.log(2);
}
a().then(()=>{b()})


//async  等效于 让函数内部return一个promise对象
//awit 关键字 ，可以使得其它函数必须等待a函数执行完毕。a函数必须返回一个promise对象
async function foo(params) {
    await a(); //await只能用来约束 内部返回promise对象的函数
    //await 必须当成同步代码看待
    b();
}
foo();