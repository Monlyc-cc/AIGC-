/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid;

    while (right > left) {
        mid = Math.floor((right + left) / 2);
        if (target == nums[mid]) {
            let r = getIndexR(nums.slice(mid), target)
            r += mid;
            let l = getIndexL(nums.slice(0, mid + 1), target)
            return [l, r]
        } else if (target > nums[mid]) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    if (nums[left] == target) {
        return [left, left]
    }
    return [-1, -1];
};
function getIndexR(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid;

    while (right > left) {
        mid = Math.floor((right + left) / 2);
        if (nums[mid] == target) {

            if (right - left == 1) {
                //相等且为则为最大标志
                if (nums[right] == target) {
                    return right;
                }
                return left;
            }
            else {
                //相等不为最小则向外寻找
                left = mid;
            }
        }
        else {
            //不等则向内寻找
            right = mid - 1;
        }
    }
    if (nums[right] == target) {
        return right
    }

}
function getIndexL(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid;
    while (right > left) {
        mid = Math.floor((right + left) / 2);
        if (nums[mid] == target) {
            if (right - left == 1) {
                //相等且为则为最大标志
                if (nums[left] == target) {
                    return left;
                }
                return right;
            }
            else {
                //相等不为最小则向外寻找
                right = mid;
            }
        }
        else {
            //不等则向内寻找
            left = mid + 1;
        }
    }
    if (nums[left] == target) {
        return left
    }
}

let arr = [2, 2]
console.log(searchRange(arr, 2))