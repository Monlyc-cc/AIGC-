/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    if (s.length < p.length) {
        return []
    }

    let mp = {};
    let res = [];
    for (let i = 0; i < p.length; i++) {
        if (mp[p[i]]) {
            mp[p[i]]++;
        }
        else {
            mp[p[i]] = 1
        }
    }

    let left = 0;
    let right = left + p.length - 1;
    let flag = false;
    while (right < s.length) {
        if (!mp[s[right]]) {
            left = right + 1;
            right = left + p.length - 1;
            flag = false;
            continue
        }
        if (!mp[s[left]]) {
            left++;
            right++;
            flag = false;
            continue
        }

        if (flag) {
            if (nums[left - 1] == nums[right]) {
                res.push(left)
            }
            else {
                left = right + 1;
                right = left + p.length - 1;
                flag = false;
                continue
            }
        }
        else {
            for (let i = left; i < right + 1; i++) {
                if (!mp[s[i]]) {
                    left = i
                    right = left + p.length - 1
                    flag = false;
                    break;
                }
            }
        }
        left++;
        right++;
    }

};

function check(s, left, right, mp) {
    let res = null;
    for (let i = left; i < right + 1; i++) {
        if (!mp[s[i]]){}
    }
    return res;
}
