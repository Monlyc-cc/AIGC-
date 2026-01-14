var groupAnagrams = function(strs) {
    let mp={}
    let res=[];
    for(let str of strs)
    {
        let arr=new Array(26).fill(0)
        for(let i of str)
        {
            arr[i.charCodeAt()-97]++
        }
        const code=getcode(arr)
        //存在一个bug 如果code 无法区分 11 0 与  1 10
        if(mp[code])
        {
            mp[code].push(str)
        }
        else
        {
            res.push([str])
            mp[code]=res.at(-1)
        }
    }
    return res
};                    
function getcode(arr)
{
    str=''
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>0)
        {
            str+=(String.fromCharCode(97+i)+arr[i])
        }

    }
    return str
}