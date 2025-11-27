let a=1;
function foo()
{
    setTimeout(() => {
        a+=1;
    }, 2000);
}
function bar()
{
    setTimeout(() => {
        a*=2;
    }, 1000);
}
function baz()
{
    console.log(a);
}


foo()
bar()
baz()
