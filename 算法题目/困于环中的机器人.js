var isRobotBounded = function(instructions) {
    let direction=0;
    let s=[0,0]
    let mq={
        G:()=>{
            let item=(direction/90)%4;
            if(item>=0)
            {
                items[item]();
            }
            else
            {
                items[(item+4)%4]()
            }
        },
        L:()=>{direction=(direction-90)%360},
        R:()=>{direction=(direction+90)%360}
    }
    let items={
        0:()=>{
            s[1]++;
        },
        1:()=>{
            s[0]++;
        },
        2:()=>{
            s[1]--;
        },
        3:()=>{
            s[0]--; 
        }
    }
    for (let i = 0; i < instructions.length; i++) {
        mq[instructions[i]]();
        console.log(s)
    }
    let v=[s,]
};
let instructions="GL"
console.log(isRobotBounded(instructions))