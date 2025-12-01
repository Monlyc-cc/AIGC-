
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let flag=true;
    let sum=0;
    for(i=s.length-1;i>=0;i--)
    {
        if(s[i]==' ')
        {
            if(flag)
            {
                continue;
            }
            else
            {
                return sum
            }
        }
        sum++;
        flag=false;
    }
    return sum;

};
let s = "   fly me   to   the moon  "
console.log(lengthOfLastWord(s))