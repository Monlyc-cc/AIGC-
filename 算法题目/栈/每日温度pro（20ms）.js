var dailyTemperatures = function (temperatures) {
    //20ms
    let res = [];
    let mq = {};
    for (let i = 0; i < temperatures.length; i++) {
        if ((!mq[temperatures[i]]) || mq[temperatures[i]] < i) {
            // 如果更大值不存在 || 更大值下标小于i， 则更新下标
            mq[temperatures[i]] = update(i, temperatures)
        }
        if(mq[temperatures[i]]==temperatures.length)
        {
            res.push(0)
            continue;
        }
        res.push(mq[temperatures[i]] - i)
    }
    return res;
};
function update(index, temperatures) {
    for (let i = index; i < temperatures.length; i++) {
        if (temperatures[i] > temperatures[index]) {
            return i;
        }
    }
    return temperatures.length;
}
let temperatures =
    [89, 62, 70, 58, 47, 47, 46, 76, 100, 70]
console.log(dailyTemperatures(temperatures))