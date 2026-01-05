/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let res = s[0]
    for (let i = 0; i < s.length; i++) {
        for (let j = i+res.length; j <= s.length; j++) {
            let item = s.slice(i, j)
            if (item.length > res.length && isfunc(item)) {
                res = item;
            }
        }
    }
    return res
};

function isfunc(s) {
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] != s[s.length - i - 1]) {
            return false;
        }
    }
    return true;
}