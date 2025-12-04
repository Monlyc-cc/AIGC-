const obj = {
    name: '俊杰',
    age: 18,
    like: {
        n: {n:'洗脚'},
        m: '台球'
    },
    x:null,
}
let newObj;
//利用structuredClone（obj）方法进行深拷贝
newObj=structuredClone(obj)
obj.like.m="篮球"
console.log(obj,newObj)

//缺点
// 无法拷贝symbol
// 无法拷贝函数


//利用Json 进行深拷贝

//Json.stringify() 
const str= JSON.stringify(obj) //将对象变为一个字符串

//Json.parse() 将字符串转回对象
newObj=JSON.parse(str) //也实现了深拷贝
obj.like.m="篮球"
console.log(obj,newObj)
