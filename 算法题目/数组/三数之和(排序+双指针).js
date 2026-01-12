// 排序后 固定一个数 然后求两数之和
// 排序，固定一数，求两数之和

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    let res = []
    if(nums[0]>0||nums[nums.length-1]<0)
    {
        return res;
    }
    for (let i = 0; i < nums.length - 2; i++) {
        if(nums[i]>0)
        {
            return res;
        }
        //固定第一位数字，求其解
        let left = i + 1;
        let right = nums.length - 1;
        let sum
        while (left < right) {
            if(nums[right]<0)
            {
                break;
            }
            sum = nums[i] + nums[left] + nums[right]
            if (sum == 0) {
                //得到结果则记录下来，给左右指针去重
                res.push([nums[i], nums[left], nums[right]])
                while (left < right && nums[left] == nums[left + 1]) { left++ }
                while (left < right && nums[right] == nums[right - 1]) { right-- }
                left++
                right--;
            } else {
                if (sum > 0) {
                    right--
                }
                else {
                    left++
                }
            }

        }
        //数组第i位的数字求解后，不再求相同数字解，于是去重
        while (i + 1 < nums.length && nums[i + 1] == nums[i]) {
            i++;
        }
    }
    return res
};

let nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums))


