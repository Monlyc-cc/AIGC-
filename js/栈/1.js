var repeatedSubstringPattern = function (s) {

    //slice(startIndex[, endIndex])
    //寻找子串
        let str
        let arr;
        let i = 1;
        console.log(s.length)
        while (i < (s.length / 2)+1) {
            console.log(i,s.slice(0, i),s.slice(i , 2 * i ))
            if (s.slice(0, i) == s.slice(i , 2 * i ) && s.length % i == 0) {
                arr = s.split(s.slice(0, i))
                if (arr.length - (s.length /i)>0) {
                    console.log("x=",arr.length - (s.length /i))
                    return true
                }
            }
            i++;
        }
    return false
}
console.log(repeatedSubstringPattern("aabaaba"))