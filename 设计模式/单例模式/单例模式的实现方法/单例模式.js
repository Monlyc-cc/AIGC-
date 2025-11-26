
//这样写的 始终有一个instance 对象被构造出来
class SingleDog
{
    static instance= new SingleDog();
    show(){
        console.log('我是一个单例对象')
    }
    static getInstance()
    {
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

