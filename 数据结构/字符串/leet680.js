function f(s,r,l)
{
    console.log(r,l);
    if(r==l)
    {
        return true;
    }
    if(s[l]==s[r])
    {
        if(r+1==l)
        {
            return true;
        }
        return f(s,r+1,l-1)
    }
    else
    {
        if(r+l==s.length-1)
        {
        return f(s,r+1,l)||f(s,r,l-1)
        }
        return false;
    }
}
var validPalindrome = function(s) {
    let r=0;
    let l=s.length-1;
    return f(s,r,l);
};
s='a'
console.log(validPalindrome(s));