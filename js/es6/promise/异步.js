let a=1;

//settimeout v8引擎会跳过它，提升执行效率
setTimeout(()=>{
    a=2;
},1000);


console.log('hello')