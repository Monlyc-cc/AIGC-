/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals = intervals.sort((a, b) => a[0] - b[0])
    let res = [];
    let x = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        let y=intervals[i]
        if(y[0]>x[1])
        {
            //新大于旧
            res.push(x);
            x=y
        }
        else
        {
            x=[Math.min(x[0],y[0]),Math.max(x[1],y[1])]
        }
    }
    res.push(x)
    return res;
};