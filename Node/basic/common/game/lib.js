export const fn = (playerAction) => {
    console.log("num:",num)
    if(num>2)
    {
        console.log("电脑：我不玩了！你耍赖！")
        return;
    }
    const arr = ['scissor', 'rock', 'paper']
    const index = Math.floor(Math.random() * 3)
    if (playerAction == arr[index]) {
        console.log('平局')
    }
    else if (playerAction == arr[index - 1]) {
        num=0;
        console.log("你输了")
    }
    else if(playerAction==arr[((index+1)%arr.length)]){
        num++;
        console.log("你赢了")
    }
    else
    {
        console.log("输入类型错误："+playerAction,'\n')
        return;
    }
    console.log("电脑是:", arr[index])
    console.log("你是:", playerAction,'\n')
}
let num=0;