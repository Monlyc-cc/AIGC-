var tictactoe = function (moves) {
    if (moves.length < 5) {
        return "Pending";
    }
    let mq = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    let mq1 = [[], [], [], [], [], []]
    let mq2 = [[], [], [], [], [], []]

    for (let i = 0; i < moves.length; i++) {
        let item = moves[i]
        if (i % 2) {
            mq[item[0]][ item[1]] = -1;
            mq2[item[0]].push(1)
            mq2[item[1]+3].push(1)
        }
        else {
            mq[item[0]][item[1]] = 1;
            mq1[item[0]].push(1)
            mq1[item[1]+3].push(1)
        }
    }

    //判断横竖胜利
    for (let i = 0; i < mq1.length; i++) {
        if (mq1[i].length > 2) {
            return "A"
        }
    }
    for (let i = 0; i < mq2.length; i++) {
        if (mq2[i].length > 2) {
            return "B"
        }
    }
    //判断斜角胜利
    if(mq[1][1])
    {
        let num=mq[1][1];
        if(num==1&&(((num==mq[0][0])&&(num==mq[2][2]))||((num==mq[2][0])&&(num==mq[0][2]))))
        {
            return "A"
        }
        else if(num==-1&&(((num==mq[0][0])&&(num==mq[2][2]))||((num==mq[2][0])&&(num==mq[0][2]))))
        {
            return "B"
        }
    }

    if (moves.length < 9) {
        return "Pending";
    }
    return "Draw";
};

let moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
let moves1 = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]
console.log(tictactoe(moves1))
