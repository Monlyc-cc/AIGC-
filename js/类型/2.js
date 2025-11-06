//数组类型
let arr=[];

arr,push(123);//尾部添加
arr.pop();//尾部删除
arr.unshift(123);//头部添加
arr.shift();//头部删除

//Array.splice() 数组删除/添加/替换 arr.splice(索引起点,删除个数,插入的元素1,添加的元素2...)
arr.splice(0,0,123)//往下标0处，删除元素0，插入元素 123
arr.splice(0,1)//往下标0处，删除一个元素，无插入元素。


