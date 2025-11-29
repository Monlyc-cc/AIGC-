function myInstanceof(obj, OBJ) {
    //因为 instanceof 函数无法判断原始类型，则自己打造的函数需要排除原始类型
    if ((typeof (obj) == Object || typeof (obj) == 'function') && obj != null) {
        while (obj.__proto__) {
            if (obj.__proto__ == OBJ.prototype) {
                return true;
            }
            obj = obj.__proto__;
        }
    }
    return false;
}
console.log(myInstanceof([], Array))
console.log(myInstanceof([], Object))
console.log(myInstanceof([], Set))
console.log(myInstanceof(Array, Object))
console.log(Array instanceof Object)
console.log(myInstanceof('s', String))
console.log('S' instanceof String)// instanceof 无法判断原始类型，
console.log(myInstanceof(null, Object))


console.log(Object.prototype)
console.log(Object.__proto__)
console.log(Object.__proto__.__proto__)
console.log(Array.__proto__)
console.log(Function.prototype)
console.log('S'.__proto__ == String.prototype)
console.log(String.prototype.__proto__)
console.log(Array.prototype.__proto__)