var dailyTemperatures = function (temperatures) {
    let arr = [];
    let flag = true;
    for (let i = 0; i < temperatures.length; i++) {
        flag=true;
        for (let j = i + 1; j < temperatures.length; j++) {
            if (temperatures[j] > temperatures[i]) {
                arr.push(j - i)
                flag=false;
                break;
            }else if(temperatures[j]==temperatures[i])
            {
                i++;
            }
        }
        if (flag) {
            arr.push(0)
        }
    }
    return arr
};