/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let [left, right, mid] = [0, matrix.length - 1, null]
    while (right > left - 1) {
        mid = Math.floor((right + left) / 2)
        if (matrix[mid][0] == target) {
            return true;
        }
        else if (matrix[mid][0] > target) {
            if (right == left) {
                return false;
            }
            right = mid;
        }
        else if (matrix[mid][0] < target) {

            if (matrix[mid][matrix[mid].length - 1] >= target) {
                if (matrix[mid][matrix[mid].length-1] == target) {
                    return true;
                }
                //找到数据所在行 为mid
                break;
            }
            else {
                if (right == left) {
                    return false;
                }
            }
            left = mid + 1;
        }
    }
    // 以上方法找到数字所在行 k 则进行查找
    let k = mid;
    let arr = matrix[k];
    left = 0;
    right = arr.length - 2;
    while (right > left - 1) {
        mid = Math.floor((left + right) / 2)
        if (arr[mid] == target) {
            return true
        }
        else {
            if (right == left) {
                return false
            }
            else {
                if (arr[mid] > target) {
                    right = mid;
                }
                else if (arr[mid] < target) {
                    left = mid + 1
                }
            }
        }
    }
};
let matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
let target = 13
console.log(searchMatrix(matrix,10))