function identify()
{
    return this.name.toUpperCase();
}
function speek()
{
    let greeting ='hello, i am '+ identify.call(this);
    console.log(greeting);
}



var me={
    name: 'tom'
}
speek.call(me)
















