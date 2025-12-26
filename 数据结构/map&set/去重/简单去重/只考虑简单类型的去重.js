// 理通宏观的逻辑，再考虑具体的逻辑实现
// 只考虑简单类型的去重
function unique(arr)
{
    let Arr=[...new Set(arr)]
    return Arr;
}
let arr=[1,2,3,4,1,2]
console.log(unique(arr))

