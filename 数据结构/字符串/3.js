//回文数的判断
// js字符串对比可以直接‘==’
function fn(str)
{
    return str==str.split('').reverse().join('') //天才，直接利用表达式最终的值，直接返回就好
}
var isPalindrome = function(x) {
     let str=x.toString();
     for(let i=0;i<str.length/2;i++)
     {
        if(str[i]!=str[str.length-1-i])
        {
            return false;
        }
     }
     return true;

};
var isPalindrome = function(x) {
     let str=x.toString();
   
     return str==str.split('').reverse().join('') ;

};
s=121;
console.log(isPalindrome(s));

