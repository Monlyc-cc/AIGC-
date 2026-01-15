/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length < 1) {
        return 0
    }
    let mq = {};
    let max = 1;
    //[head,foot]
    for (let i = 0; i < nums.length; i++) {
        if (!mq[nums[i]]) {
            if (mq[nums[i] - 1]) {
                //更新头部节点的foot状态
                mq[mq[nums[i] - 1][0]][1] = nums[i]
                mq[nums[i]] = [mq[nums[i] - 1][0], nums[i]]
                
                max = Math.max(mq[nums[i]][1] - mq[nums[i]][0] + 1,max)
            }

            if (!mq[nums[i]]) {
                mq[nums[i]] = [nums[i], nums[i]]
            }
            if (mq[nums[i] + 1]) {
                //更新尾部节点的头状态
                mq[mq[nums[i] + 1][1]][0] =mq[nums[i]][0]
                mq[mq[nums[i]][0]][1]= mq[nums[i] + 1][1]
                max = Math.max((mq[mq[nums[i]][0]][1] - mq[mq[nums[i]][0]][0] + 1),max)
            }

        }

    }
    return max;
};

let nums = [-1,-4,0,8,-2,6,-4,-8,9,-2,-6,-6]

console.log(longestConsecutive(nums))