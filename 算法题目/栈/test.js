var isMonotonic = function (nums) {
    if (nums.length < 2) {
        return false;
    } 
    let y=0;
    let x=0;
    for(let i=0;i<nums.length-1;i++)
    {

        x=nums[i+1]-nums[i];
        if(x!=0)
        {
            if(y!=0)
            {
                if(Math.abs(y-x)>Math.max(Math.abs(y),Math.abs(x)))
                {
                    console.log(y,x)
                    return false;
                }
            }
            else
            {
                y=x;
            }
        }
    }
return true;
};
nums=[1,2,3,3,3,3,3,3,5,5,5,5,9]
console.log(isMonotonic(nums));