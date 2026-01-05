/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let res = s[0]
    let mid = Math.floor(s.length / 2);
    for (let i = mid; i >=0; i--) {
        if ((i+1)* 2 > res.length) {
            let ss = isfunc(res.length,i, s);
            res = res.length > ss.length ? res : ss;
        }
    }
    for (let i = mid; i < s.length-1; i++) {
        if ((s.length - i) * 2 > res.length) {
            let ss = isfunc(res.length,i, s);
            res = res.length > ss.length ? res : ss;
        }
    }
    return res;
};

function isfunc(maxlength, index, s) {
    res1 = getdata(index - 1, index + 1, s)
    res2 = getdata(index, index + 1,s)
    return (res1.length>maxlength||res2.length>maxlength)? (res1.length>res2.length?res1:res2):s[0]
}
function getdata(left, right, s) {
    1
    while (left > -1 && right < s.length) {
        if (s[left] != s[right]) {
            break;
        }
        left--;
        right++;
    }
    console.log(s.slice(left + 1, right))
    return s.slice(left + 1, right)
}

let s = "bb";
console.log(longestPalindrome(s))