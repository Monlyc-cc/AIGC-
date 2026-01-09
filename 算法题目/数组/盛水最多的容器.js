var maxArea = function (height) {
    //求最大区间，。多用双指针法
    let l = 0;
    let r = height.length - 1;
    let max = 0;
    while (l < r) {
        max = Math.max((r - l) * Math.min(height[l], height[r]),max)
        if (height[l] > height[r]) { r-- }
        else { l++ }
    }
    return max;
};