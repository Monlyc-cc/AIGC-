//I             1
//V             5
//X             10
//L             50
//C             100
//D             500
//M             1000

var romanToInt = function (s) {
    let mq = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let sum = 0;
    let current;
    let next;
    for (let i = 0; i < s.length; i++) {
        current = mq[s[i]]
        next = mq[s[i + 1]]
        if (current < next) {
            sum += (next - current);
            i++;
        }
        else {
            sum += current;
        }
        console.log(sum);

    }

    return sum;

};
let s = "MCMXCIV"
console.log(romanToInt(s))