/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let res=[];
    if ((nums[nums.length - 1] == 0 || nums[0] == 0)) {
        if ((nums[0] == nums[nums.length - 1])) {
            res.push([0, 0, 0])
        }
        return res;
    }
    let min = nums[0] + nums[1]
    let max = nums[nums.length - 1] + nums[nums.length - 2]
    let left, right;
    for (let i = nums.length - 1; i > -1; i--) {
        if (nums[i] + min <= 0) {
            right = i;
            break;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + max >= 0) {
            left = i;
            break;
        }
    }
    return getres(nums, left, right)
};
function getres(nums, left, right) {
    let dp = {};
    let res=[];
    for (let i = left; i <= right; i++) {
        if (dp[nums[i]]) {
            continue
        }
        dp[nums[i]] = TwoSum(nums, i + 1, right, 0 - nums[i])
        if(dp[nums[i]].length>0)
        {
            res.push(...dp[nums[i]])
        }
    }
    return res;
}
function TwoSum(nums, left, right, target) {
    let dp = {};
    let filter={};
    let res = [];
    if (right - left < 1) {
        return res;
    }
    for (let i = left; i <= right;i++)
    {
        if(filter[nums[i]])
        {
            continue;
        }
        if(dp[nums[i]]!=undefined)
        {
            res.push([0-target,dp[nums[i]],nums[i]])
            filter[nums[i]]=true;
            delete dp[nums[i]]
            continue
        }
        dp[target-nums[i]]=nums[i];
    }
    return res;
}

let nums=[-1,0,1,2,-1,-4]
console.log(threeSum(nums))