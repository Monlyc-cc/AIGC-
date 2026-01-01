var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid;
    while (right > left - 1) {
        mid = Math.floor((left + right) / 2)
        if (nums[mid] == target) {
            return mid;
        }
        else if (nums[mid] > target) {
            if (right == left) {
                return mid;
            }
            right = mid ;

        }
        else if (nums[mid] < target) {
            if (right == left) {
                return mid + 1;
            }
            left = mid + 1;

        }

    }
};
let nums =
[1,3,5,6]
console.log(searchInsert(nums,2)
)