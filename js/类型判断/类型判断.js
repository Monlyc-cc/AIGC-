//假设我们封装了一个数字相加的函数
function add(a,b)
{
    return a+b;
}

//但是假如往里面传入两个对象，则无法进行加法运算
//add(obj,obj2)则函数无法执行

//应当在函数内部进行数据类类型的判断，如果类型不符合，则返回错误



//typeof() 用于判断数据类型
function add(a,b)
{
    if(typeof(a)=="number")
    {
        return a+b;
    }
    else
        return null
}
console.log(add('1',2))

console.log(typeof(new Array()))
console.log(typeof(undefined))
console.log(typeof(null))

//但是typeof函数并不精准 ， 无法用于引用类型的判断，以及null的判断