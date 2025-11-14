var plusOne = function (digits) {

    let num = 1;
    for (let i = digits.length - 1; i > -1; i--) {
        digits[i] += num;
        if (digits[i] > 9) {
            num = 1;
            digits[i] = 0
        }
        else {
            return digits;
        }
    }
    if (num) {
        digits.unshift(1);
    }
    return digits;

}
console.log(plusOne([9,3,9]));