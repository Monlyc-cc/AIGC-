/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length<2)
    {
        return nums[0]
    }
    let left=0;
    let right=nums.length-1;
    let mid;
    let k=nums.length-1;

    while(k>-1)
    {
        mid=Math.floor((k+left)/2)
        if(nums[k]<nums[left])
        {
            right=k;
            k=mid;
        }
        else
        {
            if(nums[(k+1)%(right+1)]<=nums[right])
            {
                if(k==nums.length-1)
                {
                    return nums[0];
                }
                return nums[k+1]
            }
            else
            {
                k=Math.floor((k+right)/2)
            }
        }
    }
};
let nums =  [11,13,15,17]
console.log(findMin(nums))