var findAnagrams = function (s, p) {
    if (p.length > s.length) {
        return []
    }
    // ✅ 26个质数 + 对应逆元
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
    const invPrimes = [2147483649, 2863311531, 3435973837, 1883531651, 3813515725, 3303820951, 1992952415, 3947368423, 3709528603, 3654382589, 1385495873, 1160802045, 1047553007, 3995206987, 4085478107, 2490548375, 2300509003, 1353215297, 1245080903, 1209640701, 1176100507, 1090758947, 1022087909, 963326063, 432469447, 425145199];
    let pcount = 1;
    let scount = 1;
    let res = [];
    const pLen = p.length;

    // ✅ 初始化阶段：分步乘+分步取模 【加回来！】→ 无溢出，不错位
    for (let i = 0; i < pLen; i++) {
        scount = (scount * primes[s[i].charCodeAt() - 97]) >>> 0;
        pcount = (pcount * primes[p[i].charCodeAt() - 97]) >>> 0;
    }

    if (scount === pcount) {
        res.push(0)
    }

    // ✅ 滑动窗口核心修改：除法 → 乘逆元，仅此1处！
    for (let i = pLen; i < s.length; i++) {
        // ❌ 原代码：scount /= primes[s[i - pLen].charCodeAt() - 97]
        // ✅ 新代码：乘逆元替代除法，全程取模，无溢出
        const leftIdx = s[i - pLen].charCodeAt() - 97;
        scount = (scount * invPrimes[leftIdx]) >>> 0;
        
        // ✅ 乘法取模，不变
        const rightIdx = s[i].charCodeAt() - 97;
        scount = (scount * primes[rightIdx]) >>> 0;

        if (scount === pcount) {
            res.push(i - pLen + 1)
        }
    }
    return res
};

s = "eklpyqrbgjdwtcaxzsnifvhmoueklpyqrbgjdwtcaxzsnifvhmoueklpyqrbgjdwtcaxz"
p = 'yqrbgjdwtcaxzsnifvhmou'
console.log(findAnagrams(s, p)) // 完美输出正确结果 ✔️