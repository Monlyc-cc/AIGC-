/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let mq = {};
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!mq[nums[i]]) {
            mq[nums[i]] = [nums[i].toString(), 1]
            if (mq[nums[i] + 1]) {
                mq[nums[i]][0] += mq[nums[i] + 1][0]
                mq[nums[i]][1] += mq[nums[i] + 1][1]
                mq[nums[i] + 1] = mq[nums[i]]
            }
            if (mq[nums[i] - 1]) {
                mq[nums[i]][0] = mq[nums[i] - 1][0]+mq[nums[i]][0] 
                mq[nums[i]][1] += mq[nums[i] - 1][1]
                mq[nums[i] - 1] = mq[nums[i]]
            }
            max=Math.max(mq[nums[i]][1],max)
            console.log(mq)
        }
    }
    return max;
};

let nums=[0,3,7,2,5,8,4,6,0,1]

longestConsecutive(nums)