function foo()
{
    console.log("hello")
}
foo();

foo=new Function('console.log("hello");')
foo()

 function foo(){}  =>  foo=new Function()  