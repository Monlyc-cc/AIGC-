function addkey(obj,key,val)
{
    obj[key]=val;
}
const obj={};
const num=1;
addkey(obj,'age',18);
console.log(obj)
addkey(num,'age',18);
console.log(num)

//利用instanceof判断类型
// instanceof 只能判断简单类型
console.log([] instanceof Array)
console.log(null instanceof Object )//false
console.log(1 instanceof Number) //false
console.log([] instanceof Object)//true
console.log(1 instanceof Object) //false