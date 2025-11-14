
var lengthOfLongestSubstring = function (s) {
    if (s.length == 1) {
        return 1;
    }
    if (s.length == 0) {
        return 0;
    }
    let max = 1;
    let i = s.length - 1;
    let right = i;
    let map = {[s[i]]:i};
    while (--i >= 0) {
        if (map[s[i]] && map[s[i]] <= right) {
            right = map[s[i]] - 1;
        }
        else {
            max = Math.max(max, right - i + 1)
        }
        map[s[i]] = i;
    }
    return max;
}


let s = "nfpdmpi";
console.log(lengthOfLongestSubstring(s));
