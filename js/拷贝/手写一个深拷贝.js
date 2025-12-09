function clonFunction(newObj, obj, key) {
    //传入进来的obj[key],必须是一个函数，本函数的目的是,将obj[key]函数添加进newObj对象中
    newObj[key] = obj[key];
}


function deepCopy(obj) {
    let O = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] instanceof Object && !obj[key] instanceof Function) {
                O[key] = deepCopy(obj[key]);
            }
            else {
                O[key] = obj[key]
            }
        }
    }
    return O;
}


const obj = {
    name: '俊杰',
    age: 18,
    like: {
        n: { n: '洗脚' },
        m: '台球'
    },
    x: null,
    y:Symbol(1)
}
const newObj = deepCopy(obj)
obj.x = "xxx";
console.log(obj)
console.log(newObj)
console.log(obj.y==newObj.y)