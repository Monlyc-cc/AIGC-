//冒泡排序
let arr=[1,3,4,2,5];
for (let i = 0; i < arr.length-2; i++) {
    for (let j = i; j < arr.length-2; j++) {4
        if(arr[j]>arr[j+1])
        {
            [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
        }
    }
}
console.log(arr)