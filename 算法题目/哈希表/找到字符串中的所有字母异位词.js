
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    if (p.length > s.length) {
        return []
    }
    // 设置一个数字differ 确定当前不同数的数量为0，则可以直接返回结果
    let differ = 0;
    let arr = new Array(26).fill(0)
    let res = []
    for (let i = 0; i < p.length; i++) {
        ++arr[s[i].charCodeAt() - 97]
        --arr[p[i].charCodeAt() - 97]
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            ++differ
        }
    }
    if (differ == 0) {
        res.push(0)
    }
    for (let i = p.length; i < s.length; i++) {
        
        ++arr[s[i].charCodeAt() - 97]
        if (arr[s[i].charCodeAt() - 97] == 1) {
            ++differ
        }
        if (arr[s[i].charCodeAt() - 97] == 0) {
            --differ
        }


        --arr[s[i - p.length].charCodeAt() - 97]
        if (arr[s[i - p.length].charCodeAt() - 97] == -1) {
            ++differ
        }
        if (arr[s[i - p.length].charCodeAt() - 97] == 0) {
            --differ
        }


        if (differ == 0) {
            res.push(i-p.length+1)
        }
    }
    return res
};

s = "cbaebabacd"
p = "abc"
console.log(findAnagrams(s, p))