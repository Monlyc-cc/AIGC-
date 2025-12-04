function clonFunction(newObj, obj, key) {
    //传入进来的obj[key],必须是一个函数，本函数的目的是,将obj[key]函数添加进newObj对象中
    newObj[key] = obj[key];
}


function deepCopy(obj) {
    const O = structuredClone(obj)
    copyFunction(O,obj);
}
function copyFunction(O,obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] instanceof Function) {
                //将函数重新添加进拷贝对象中
                O[key] = obj[key];
            }
            if (obj[key] instanceof Object) {
                // 递归进入对象中,将对象内部缺失
                copyFunction(O[key],obj[key]);
            }
        }
    }
    return
}

const obj = {
    name: '俊杰',
    age: 18,
    like: {
        n: {n:'洗脚'},
        m: '台球'
    },
    x:null,
}
const newObj=deepCopy(obj)
console.log(obj)