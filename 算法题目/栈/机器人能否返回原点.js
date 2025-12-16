var judgeCircle = function (moves) {
    let sum = [0, 0]
    for (let i of moves) {
        if (i == "R") {
            sum[0]++;
        }
        else if(i == "L")
        {
            sum[0]--;
        }
        else if(i == "U")
        {
            sum[1]++;
        } else if(i == "D")
        {
            sum[1]--;
        }

    }
    return (sum[0] == 0 && sum[1] == 0)

};