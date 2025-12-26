var search = function(nums, target) {

    if(nums.length==1)
    {
        if(nums[0]==target)
        {
            return 0;
        }
        return -1;
    }
    let right=nums.length-1;
    let left=0;
    let k=nums.length-1;
    let mid;
    while(true)
    {
        if(nums[k]<nums[left])
        {
            right=k;
            k=Math.floor((k+left)/2)
        }
        else if(nums[k]>nums[left])
        {
            if(nums[(k+1)%(right+1)]<=nums[right])
            {
                break;
            }
            else
            {
                k=Math.floor((right+k)/2)
            }
        }
        else
        {
            break
        }
    }

    right=nums.length-1;
    if(target>nums[right])
    {
        right=k;
    }else if(target<nums[right])
    {
        if(k<right)
        {
        left=k+1;
        }
    }
    else
    {
        return right;
    }

    while(right-left>-1)
    {
        mid=Math.floor((right+left)/2)
        if(nums[mid]==target)
        {
            return mid;
        }
        else if(nums[mid]>target)
        {
            right=mid-1
        }
        else if(nums[mid]<target)
        {
            left=mid+1;
        }
    }
    return -1;

};
let nums = [6,7,8,0,1,3,5]
let target = 1
console.log(search(nums,target))