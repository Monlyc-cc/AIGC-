//拷贝 arr!=arr 地址不同，但是拷贝出了一个完整新的数组，只是存的值相同
// 拷贝是目的，浅拷贝是效果

//浅拷贝

//利用[].slice(0) 进行拷贝 
let arr=[1,2,3,4,{age:18}]
let arr2=arr.slice(0) 
console.log(arr==arr2)

arr[4].age=10;
console.log(arr2[4].age) // 新对象受原对象影响，所以是一个浅拷贝

// 利用解构进行数组拷贝 
arr2=[...arr]
arr[4].age=20;
console.log(arr2[4].age) // 新对象受原对象影响


// 引用类型数据的存储方式 
// 引用类型数据的方式只有一种，那就是转换为堆栈中的地址存储
//当 arr=[1,2,3,{age:18}] 被申明后


//[].concat()
const a=[1,2,3,{age:1}]
const b=[4,5]

let c=a.concat(b) //会遍历两个数组，然后将遍历出的值全部存入一个新的数组，然后将其返回
console.log(a,c,a==c)

c=a.concat();
a[3].age=2;
console.log(c[3].age) //新对象受原对象影响，属于浅拷贝


//reverse() toReversed()
c=b.reverse()
console.log(c,b,c==b) //所以 reverse 并没有返回一个新对象，不是浅拷贝

c=b.toReversed().reverse() 
console.log(c,b,c==b) // toReversed().reverse() ，会产生一个新对象，且新对象受到原对象影响属于浅拷贝



//Object.assign()
let obj1={
    name:"xxx",
}
let obj2={
    age:11,
}
let newObject=Object.assign(obj1,obj2) //将obj2中的属性拷贝到，obj1中，然后将obj1返回
console.log(newObject,obj1,obj2,newObject==obj1)// 新对象与obj1相同
//同理 newObject=Object.assign({},obj) 就可以进行一个浅拷贝
newObject=Object.assign({},obj1);
obj1.name="yyyy";
console.log(newObject,obj1,newObject==obj1)// 对对象内部的对象进行一次浅拷贝，直到拷贝原始值即可完成浅拷贝

