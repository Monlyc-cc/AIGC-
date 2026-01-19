/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(nums.length<3)
    {
        return nums[0]
    }
    let dp={}
    let n=nums.length/2

    for(let i=0;i<nums.length;i++)
    {

        if( dp[nums[i]])
        {
            dp[nums[i]]++
           if(dp[nums[i]]>n)
            {
                return nums[i]
            }   
        }
        else
        {
            dp[nums[i]]=1
        }
    }
};