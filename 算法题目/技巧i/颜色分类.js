/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    //记录 1 于 2 的最小index 如果进入数字0 则 与 1的最小位置换后，让交换过去的1 2 的最小位置换，然后1于我的最小index都加1
    let x = 0;
    let y = 0;
    for (let i = 0; i < nums.length && x < nums.length && y < nums.length; i++) {

        if (nums[i] == 0) {
            swap(i, x, nums)
            if (x != y) {
                swap(i, y, nums)
            }
            x++
            y++

        }
        else if (nums[i] == 1) {
            swap(i, y, nums)
            y++
        }

    }
};
function swap(x, y, nums) {
    let z = nums[x];
    nums[x] = nums[y];
    nums[y] = z;
}
let nums = [1, 0]
sortColors(nums)