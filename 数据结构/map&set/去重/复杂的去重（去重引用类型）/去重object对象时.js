function unique(arr) {
    let arr_n = []
    let arr_o = []
    for (let i of arr) {
        if (i instanceof Object) {
            if (!arr_o.includes(i)) {
                arr_o = unique_o(arr_o, i)
            }
        }
        else {
            arr_n.push(i)
        }
    }
    arr_n = unique_n(arr_n)

}

function unique_n(arr) {
    return [...new Set(arr)]
}
function unique_o(arr, object) {
    for (let i of arr) {
        if (equrel(i, object)) {
            // 重复则不入队列
            return arr;
        }
    }
    // 无重复则入队列
    arr.push(object)
    return arr;
}
function equrel(a, b) {

    let akeys = a.keys;
    let bkeys = b.keys;
    if (akeys.length == bkeys.length) {``
        for (let i of bkeys) {
            if (akeys.includes(i)) {
                if (a[i] instanceof Object && b[i] instanceof Object) {
                    if (!equrel(a[i], a[i])) {
                        return false;
                    }
                }
                else {
                    if (a[i] != b[i]) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
    else {
        return false;
    }
}