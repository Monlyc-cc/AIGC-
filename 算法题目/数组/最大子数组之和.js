/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let dp = 0;
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        dp=Math.max(nums[i]+dp,nums[i])
        max=Math.max(dp,max)
    }
    return max
};

