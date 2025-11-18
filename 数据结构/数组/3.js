
var maxSlidingWindow = function (nums, k) {
    let max;//
    let f_max;
    let arr = [];//
    let index = -1;//最大值所在下标
    let left = 0//滑动窗口左边界
    let right = 0;//滑动窗口有边界
    let mq = new Map();

    max = nums[left];
    right = left + k;
    for (let i = left; i < right; i++) {
        mq[nums[i]] = i;
        if (nums[i] > max) {
            index = i;
            max = nums[i];
        }
    }
    index = mq[max];
    f_max = nums[index + 1];
    arr.push(max);
    right += 1;
    while (right < nums.length+1) {

        //更新数字都在哪儿些下标下
        mq[nums[right - 1]] = right - 1;
        if (index > left) {
            if (max <= nums[right - 1]) {
                max = nums[right - 1];
                index = right - 1;
                f_max = nums[index + 1];
            }
            else {
                if (nums[right - 1] > f_max) {
                    f_max = nums[right - 1];
                    mq[f_max] = right - 1;
                }
            }
        }
        else {
            //如何滑动窗口未超出滑动窗口，更新index与max，更新次大值与下标
            max = Math.max(f_max, nums[right - 1]);
            index = mq[max];
            f_max = nums[index + 1];
        }
        arr.push(max);
        //如何超出滑动窗口，最大值与次大值与现值的比较，更更新最大值以及下标，更新次大值为nums【i+1】，下标为i+1
        //窗口超出index后
        left++;
        right++;
    }


    return arr;

};

let nums = [9,10,9,-7,-4,-8,2,-6];

console.log(nums)
console.log(maxSlidingWindow(nums, 5))