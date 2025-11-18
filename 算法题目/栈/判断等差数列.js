var canMakeArithmeticProgression = function(arr) {
    if(arr.length==1)
    {
        return false;
    }
    let mp=new Map();
    let min=arr[0];
    let max=min;
    for(let i of arr)
    {
        mp[i]=1;
        min=Math.min(i,min)
        max=Math.max(i,max)
    }
    let k;
    if((max-min)%(arr.length-1))
    {
        return false
    }
    else
    {
        k=(max-min)/(arr.length-1);
    }
    for(let i=min+k;i<max;i+=k)
    {
        if(!mp[i])
        {
            return false
        }
    }
    return true;
};
arr=[-68,-96,-12,-40,16]
console.log(canMakeArithmeticProgression(arr));