/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let dq=new Map()
    for(let i=0;i<nums.length;i++)
    {
        if(dq.get(nums[i]))
        {
            dq.delete(nums[i])
        }
        else
        {
            dq.set(nums[i],1)
        }
    }  
    return dq.keys().next().value
};