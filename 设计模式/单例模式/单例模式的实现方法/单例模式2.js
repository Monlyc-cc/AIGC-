//这样写的好处，只有在使用该类时，单例对象才被创造出来。
class SingleDog
{
    show(){
        console.log('我是一个单例对象')
    }
    static getInstance()
    {
        if(!SingleDog.instance)
        {
            SingleDog.instance=new SingleDog();
        }
        return SingleDog.instance;
    }
    constructor()
    {
        this.name="xxx";
    }
}
const s=SingleDog.getInstance();
const t=SingleDog.getInstance();

console.log(s==t)

