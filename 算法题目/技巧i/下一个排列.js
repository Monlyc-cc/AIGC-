/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    if (nums.length < 2) {
        return nums;
    }

    let mid = nums.length - 1

    while (mid > 0 && nums[mid - 1] >= nums[mid]) {
        mid--
    }

    let left;
    if (mid > 0) {
        left = mid - 1
    }
    else {
        left = mid
    }
    let right = nums.length - 1;
    while (nums[right] <= nums[left] && right > 0) {
        right--
    }



    swap(nums, left, right)


    //交换完成  不改变mid右侧递减形式 ，只需要反转数组即可

    reverse(nums, mid, nums.length - 1)


};
function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

function reverse(nums, start, end) {
    while (start < end) {
        swap(nums, start, end);
        start++;
        end--;
    }
}

nextPermutation([5, 1, 1])

