function xq() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('佳俊相亲成功');
            reject('xq错误');
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
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('小佳俊诞生了')
        }, 1000)
        resolve();
    })

}
//假设相亲失败
xq().then(() => {
    console.log('success')
}).catch((err) => { 
    console.log('catch',err) 
})

