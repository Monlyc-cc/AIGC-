function fn()
{//实现一个递归函数必须要满足两个要素

    //当满足何种条件时，继续往下递归
    fn          ()
    //当满足何种条件时停止递归
    return 
}
function mul(num)
{
    if(num==0)
    {
        return 1;
    }
    return num*mul(num-1)
}
console.log(mul(3))