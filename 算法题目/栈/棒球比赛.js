var calPoints = function(operations) {

    let sum=0;
    let arr=[];
    let mq={
        '+':function ()
        {
            let x=arr[arr.length-1]+arr[arr.length-2]
            sum+=(x)
            arr.push(x)
        },
        'D':function ()
        {
            let x=arr[arr.length-1]*2
            sum+=(x)
            arr.push(x)
        },
        'C':function()
        {
            sum-=arr[arr.length-1]
            arr.pop()
        },
    }
    for(var i of operations)
    {
        if(mq[i])
        {
            mq[i]();
        }
        else
        {
            sum+=(i-'0')
            arr.push(i-'0')
        }
    }
    return sum;    
};
ops= ["5","-2","4","C","D","9","+","+"]
console.log(calPoints(ops))