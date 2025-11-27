function xq() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('佳俊相亲成功');
            resolve();
        }, 3000)
    })

}

function marry() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("佳俊结婚了")
            resolve();
        }, 2000)
    })

}

function baby() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('小佳俊诞生了')
        }, 1000)
        resolve();
    })

}
//1. xq（）立即返回了一个promise对象，状态为等古代
//2. 3秒后xq（），prommise 对象状态变为 成功
//3. then里面的函数才触发

//本质上，xq（） 与then（）早就触发了，只是then需要等待promise 状态变为成功 在执行then传进去的函数


//then 源码默认返回一个promise对象,且状态继承了前面的相亲函数
//如果要then返回的promise与 marry的promise相同，则需要返回promise状态根据marry 返回的
xq().then(marry).then(baby)

