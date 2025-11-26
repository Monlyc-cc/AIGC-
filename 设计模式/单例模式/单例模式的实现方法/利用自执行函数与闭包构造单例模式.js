//这样写的好处，只有在使用该类时，单例对象才被创造出来。
class SingleDog
{
    static getInstance=(function()
{
    let instance;
    return function(){
        if(!instance)
        {
            instance=new SingleDog();
        }
        return instance;
    }
})()

}
const s=SingleDog.getInstance();
const t=SingleDog.getInstance();

console.log(s==t)

