var moveZeroes = function (nums) {
    let arr = []
    let arr_0 = []
    for (let i = 0; i < nums.length; i++) {
        {
            if (nums[i]) {
                arr.push(nums[i])
            }
            else {
                arr_0.push(0)
            }
        }
    }
    nums = arr.concat(arr_0);
    console.log(nums);
};
var nums = [0, 0, 1]
moveZeroes(nums)
