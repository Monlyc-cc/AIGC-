
maxSlidingWindow = function (nums, k) {
    let length = nums.length;
    let res = [];
    let dque = [];
    for (let i = 0; i < length; i++) {
        while (dque.length && nums[dque[dque.length - 1]] < nums[i]) {
            dque.pop();
        }
        dque.push(i);
        if (i > k -2) {
            // 减少去除超出窗口最大值的时间
            while (dque[0] < i - k+1) {
                dque.shift();
            }
            res.push(nums[dque[0]]);
        }
    }
    return res;

};
nums = [9, 10, 9, -7, -4, -8, 2, -6];
console.log(nums)
console.log(maxSlidingWindow(nums, 5))