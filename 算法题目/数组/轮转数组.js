/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k %= nums.length;
    if (k < 1) {
        return
    }
    update(nums, k, 0)
};
function update(nums, k, index) {
    let x = (nums.length-index) % k;
    for (let i = 0; i < Math.ceil((nums.length-index - k) / k); i++) {
        let left = i * k + index
        let right = left + k
        for (let j = left; j < right; j++) {
            let n = nums[j];
            nums[j] = nums[nums.length - right + j]
            nums[nums.length - right + j] = n;
            console.log(nums)
        }
    }
    if (x == 0 || k % x == 0) {
        return
    }
    update(nums, k - x, nums.length - x)
}
nums =
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]

k = 38
rotate(nums, k)

