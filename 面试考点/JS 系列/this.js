let obj={a:1}

function myBind(obj)
{
    return ()=>{
        this.call(obj)
    }
}

Function.prototype.myBind=myBind
function foo()
{
    console.log(this);
}
foo.myBind(obj)()

