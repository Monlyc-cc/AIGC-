var object =  {
    name:'张三',
    age:18,
};

//console.log(object.name);
//object['boyfried']='aaa';
//object.boyfriend = '李四';

//var person = "kobe";
//object.person='易烊千玺';


//object['kuku']='易烊千玺'; ##js中中文字符可以作为key
console.log(object);



var arr=[1,2,3,4,5];
for (var key in object) {
    console.log(key);
}
for (var i = 1; i<arr.length;i++)
    {
        arr[i]++;
    }
    console.log(arr);