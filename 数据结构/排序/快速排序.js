let arr=[1,3,4,2,5];


///快速排序，优化了归并排序拆分数组的过程

function quickSort(arr)
{
    if(arr.length<=1)
    {
        return arr;
    }
    let mideIndex=Math.floor(arr.length/2)
    let left=[]
    let right=[]
    for (let i = 0; i < arr.length&&arr!=mideIndex; i++) {
        if(arr[i]<arr[mideIndex])
        {
            left.push(arr[i])
        }
        else
        {
            right.push(arr[i])                                                      
        }
    }
    return quickSort(left).concat(quickSort(right));
}
console.log(quickSort(arr))