//暂时性死区 let在{}内会形成一个暂时性死区
let a=1;
if(true)
{
    let a=2;
    console.log(a);// 2
}
if(true)
{
    console.log(a);//报错
    let =2;
}