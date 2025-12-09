const obj = {
    name: '俊杰',
    age: 18,
    like: {
        n: '洗脚',
        m: '台球'
    }
}

// function shallowCopy(obj) {
//     const o=Object.assign({},obj);
//     o.like=Object.assign({},obj.like)
//     return o;
// }
function shallowCopy(obj) {
    let o = {};
    //for in 循环  遍历 obj的key值
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            //规避对象隐式原型上的属性
            o[key] = obj[key]
        }
    }
    return o;
}

const newObj = shallowCopy(obj)
obj.like.m = '篮球'
console.log(newObj, obj);
let arr=[1,2,3,obj]
let arr2= shallowCopy(arr)
console.log(arr instanceof Array)
console.log(arr2 instanceof Array)