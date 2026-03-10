const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'


let id = 0
function myPromise(callback) {
    const that = this
    this.id = id++
    this.status = PENDING
    this.value = null
    this.resolvedCallbacks = []
    this.rejectedCallbacks = []
    function resolve(value) {

        if (value instanceof myPromise) {
            return value.then(resolve, reject)
        }

        if (that.status === PENDING) {
            that.status = RESOLVED
            that.value = value
            that.resolvedCallbacks.map(cb =>
                cb(that.value))
        }
    }
    function reject(value) {
        if (that.state === PENDING) {
            that.state = REJECTED
            that.value = value
            that.rejectedCallbacks.map(cb =>
                cb(that.value))
        }
    }
    try {
        callback(resolve, reject)
    } catch (e) {
        reject(e)
    }
}
myPromise.prototype.then = function (onFulfilled, onRejected) {
    const that = this
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
    onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r }


    if (this.status == PENDING) {
        return new myPromise((resolve, reject) => {

            that.resolvedCallbacks.push((value) => {
                try {
                    resolve(onFulfilled(value))
                } catch (r) {
                    reject(r)
                }
            })


            that.rejectedCallbacks.push(() => {
                try {
                    reject(onRejected(that.value))
                } catch (r) {
                    reject(r)
                }
            })
        })
    }
    if (this.state === RESOLVED) {
        return (promise2 = new MyPromise((resolve,
            reject) => {
            setTimeout(() => {
                try {
                    resolve(onFulfilled(that.value))
                } catch (reason) {
                    reject(reason)
                }
            })
        }))
    }


}



setTimeout(() => {
    console.log('100');
})
new myPromise((res, rej) => {
    console.log('prmise1');

    setTimeout(() => {
        console.log('30');

        res(10)
    })
}).then(
    (res) => {
        console.log('22');
        return res * 2
    }
).then(
    (res) => {
        console.log(res + 1);
    }
)
setTimeout(() => {
    console.log('40');

})
console.log('10');

// 所此可见，js中本质其实还是分为不耗时的任务与耗时的任务
// 所谓宏任务与微任务之分