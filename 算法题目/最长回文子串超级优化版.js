/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let mq = new Map();//用来记录子串的回文情况
    let res = s[0]
    for (let i = 1; i < s.length; i++) {

        for (let j = 0; j < s.length - i; j++) {

            if (s[j] == s[j + i]) {
                if (j + 1 < j + i - 1) {
                    mq.set([j, j + i].join('-'), mq.get([j + 1, j + i - 1].join('-')))

                } else {
                    mq.set([j, j + i].join('-'), true);
                }

                if (mq.get([j, j + i].join('-'))) {
                    res = s.slice(j, j + i + 1)
                }
            }
            else {
                mq.set([j, j + i].join('-'), false)
            }

        }

    }
    return res;
}

let s = 'bbbb'
console.log(longestPalindrome(s))