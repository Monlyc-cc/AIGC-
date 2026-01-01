/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {

    let set = new Set(['[', ']'])
    let arr = [];
    let nums = [];
    let str = '';
    let sss;
    let sstr;
    let x;
    let i = 0;
    while (i < s.length) {
        if (Number(s[i]) >= 0) {
            let num = '';
            while (Number(s[i]) >= 0) {
                num += s[i];
                i++;
            }
            nums.push(Number(num))
        }
        else {

            if (set.has(s[i])) {
                if (s[i] == '[') {
                    arr.push(s[i])
                }
                else {
                    sss = [];
                    sstr = '';
                    while (arr.at(-1) != '[') {
                        sss.push(arr.pop())
                    }
                    arr.pop()

                    x = nums.pop();
                    sss = sss.reverse().join('')
                    while (x--) {
                        sstr += sss;
                    }
                    if (arr.length) {
                        arr.push(sstr)
                    }
                    else {
                        str += sstr;
                    }

                }
            }
            else {
                if (arr.length) {
                    arr.push(s[i])
                }
                else {
                    str += s[i];
                }
            }
            i++;
        }
    }
    return str;
};
let s = "3[z]2[2[y]pq4[2[jk]e1[f]]]ef"
console.log(decodeString(s))