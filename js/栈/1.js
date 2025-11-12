var repeatedSubstringPattern = function(s) {
  if(s.length%2>0)
  {
    let i=0;
    //slice(startIndex[, endIndex])
    //寻找子串
    let str;
    while(i<s.length/2)
    {
        if(s.slice(0,i)==s.slice(i+1,2*i))
        {
            str=s.slice(0,i);
        }
        else{
            break;
        }
    }
    if(str)
    {
        for(let i=2*str.length;i<s.length;i+=str.length-1)
        {
            if(s.slice(i,i+str.length-1)!=str)
            {
                return false;
            }
        }
        return true;
    }
  }
  return false;
};
console.log(repeatedSubstringPattern("abab"));