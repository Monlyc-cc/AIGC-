function cache(func)
{
    let res={}
    return  (...args)=>{
        if(!res[args])
        {
            console.log(args.toString()+" 不存在"+" 重新记录结果");
            
            res[args]=func(...args)
        }
        return res[args]
    }
}

function add(a,b)
{
    return a+b
}

calc=cache(add)
calc(1,2)


