function fn(n) {
    if (n == 0) {
        return 1;
    }
    if (n < 0) {
        return 0;
    }
    return fn(n - 1) + fn(n - 2);
}
let mq = {};
var climbStairs = function (n) {
    if (!mq[n]) {
        if (n == 0) {
            return 1;
        }
        if (n < 0) {
            return 0;
        }

        mq[n] = climbStairs(n - 1) + climbStairs(n - 2);
    }
    return mq[n];
};



console.log(climbStairs(3))
