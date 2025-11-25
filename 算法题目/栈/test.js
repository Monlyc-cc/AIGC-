//I             1
//V             5
//X             10
//L             50
//C             100
//D             500
//M             1000

var romanToInt = function(s) {
    let mq={
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
    }  
    let I_obj=new Set(['V','X'])
    let X_obj=new Set(['L','C'])
    let C_obj=new Set(['D','M'])
    let ruler={
        I:I_obj,
        X:X_obj,
        C:C_obj
    }
    for(let i of s)
    {
    }

};