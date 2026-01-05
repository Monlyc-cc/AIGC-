var dailyTemperatures = function (temperatures) {
    let arr = [];
    let res = Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++) {
        if (arr.length) {
                while (arr.length  && temperatures[i] > temperatures[arr.at(-1)]) {
                    let x = arr.pop();
                    res[x] = i - x;
                }
            }
        arr.push(i)
    }
    return res;
};
let temperatures =
    [89, 62, 70, 58, 47, 47, 46, 76, 100, 70]
console.log(dailyTemperatures(temperatures))