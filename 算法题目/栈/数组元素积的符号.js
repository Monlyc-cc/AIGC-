var arraySign = function(nums) {
    let a=0;
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]<0)
        {
            a++;
        }
        else if  (nums[i]==0)
        {
            return 0;
        }
    }
    if(a%2==0)
    {
        return 1;
    }
    else
    {
        return -1;
    }
};
console.log(arraySign([1,-1,-1]))