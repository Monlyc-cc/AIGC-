const obj:Object={}

const obj1:object={}

const obj2:{}={}

let num=123
let fun=()=>{}


let someValue:any='this is a apple'
let strLength= (someValue as string).length
strLength=(<string>someValue).length



// 类型守卫
interface a{
    name:string,
    age:number
}
let x:a={
    name:'xx',
    age:123
}

// type

// 联合类型
type Person= string|number|boolean
let y:Person=true


// 交叉类型

type PartialX={
    x:number
}
type Point= PartialX&{y:number}
const p:Point={
    x:1,
    y:2
}




// 泛型

//在函数被调用时，再去查看变量的类型
function xxx<T>(value:T)
{
    return value
}

function yyy<x,y>(value:x,msg:y):x{
    console.log(msg);
    return value
}


// 泛型与数组
let arr:[number,number,number,string]= [1,2,3,'1']
console.log(arr);

