// 如何在node终端中输入数据

//石头剪刀布
//当人在终端输入 node 2,js rock 电脑自动出一个，并输出对战结果
const playerAction=process.argv[process.argv.length-1]
const arr=['scissor','rock','paper']
const index=Math.floor(Math.random()*3)
if(playerAction==arr[index])
{
    console.log('平局')
}
else if(playerAction==arr[index-1])
{
    console.log("你输了")
}
else 
{
    console.log("你赢了")
}

console.log("电脑是:",arr[index])
console.log("你是:",playerAction )

