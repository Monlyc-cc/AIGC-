var a = 0;
var obj =
{
    a: 1,
    fn: function fn() {
        console.log(this.a);
    }
}
obj.fn()