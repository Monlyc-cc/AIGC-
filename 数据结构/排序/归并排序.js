//我想要知道整个数组的排序，需要先知道数组左右两部分排序，想知道左右两边数组的排序，需要分别知道它们自身左右两边数组的排序，最后我们需要合并左右两边排序结果等到最终结果

//
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid, arr.length))
    return merge(left,right)
}


//合并左右数组
function merge(left, right) {
    let arr = []
    let i = 0;
    let j = 0;
    while (i < left.length  && j < right.length ) {
        if (left[i] < right[j]) {
            arr.push(left[i])
            i++;
        }
        else {
            arr.push(right[j])
            j++;
        }
    }
    if (i == left.length) {
        arr=arr.concat(right.slice(j))                     
    }
    else {
        arr=arr.concat(left.slice(i))
    }
    return arr
}
let arr=[1,3,4,2,5];
console.log(mergeSort(arr))