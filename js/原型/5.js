G.prototype.horus=function (){
    console.log("big horus")
}
function G()
{
    this.cow="c"
}
P.prototype=new G();
function P()
{
    this.lastname='b'
}
C.prototype= new P();
function C()
{
    this.name='a';
}
const c=new C();
c.horus()
C.toString();
