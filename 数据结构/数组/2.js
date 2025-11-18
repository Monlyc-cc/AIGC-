var maxSlidingWindow = function (nums, k) {
    let max;//
    let arr = [];//
    let index=-1;//最大值所在下标
    let left=0//滑动窗口左边界
    let right=0;//滑动窗口有边界
    while(right<nums.length+1)
    {

        //判断此时最大值是否滑出滑动窗口,滑出则更新最大值，否则不更新
        if(index<left)
        {
            max=nums[left];
            index=left;
            right=left+k;
            for(let i=left+1;i<right;i++)
            {
                if(nums[i]>max)
                {
                    index=i;
                    max=nums[i];
                }
            }
            arr.push(max);
        }
        else
        {
            max=Math.max(max,nums[right-1]);
            arr.push(max);
        }
        left++;
        right++;
    }


    return arr;

};

let nums=[9,8,9,8];
console.log(nums)
console.log(maxSlidingWindow(nums,3))