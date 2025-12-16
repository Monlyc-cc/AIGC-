//
if(1=='1')
{
    console.log(1)
}

//js中所有引用类型转Boolean 都是ture
const arr=[1];
if(arr)
{
    console.log("hello")
}

//模拟这个过程
console.log([1]==2)
//1 执行valueOf() 

console.log(arr.toString())
console.log(typeof(arr.toString()))

console.log(Number('xxx'))
console.log({}+'1')