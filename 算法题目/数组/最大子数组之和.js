/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length<2)
    {
        return nums[0]
    }
    let left;
    let right;
    return Math.max(maxSubArray(left))
};