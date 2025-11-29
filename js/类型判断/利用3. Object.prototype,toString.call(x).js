//  Object.prototype,toString.call(x)
let arr=[];
console.log(Object.prototype.toString.call(arr))

function getType(object)
{
    let str=Object.prototype.toString.call(object);
    return str.slice(8,-1);
}
console.log(getType(arr))

