var isValid = function (s) {
    if (s.length % 2) {
        return false;
    }
    a = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    b = [];
    for (let i = 0; i < s.length; i++) {
        if (a[s[i]]) {
            b.push(s[i]);
        }
        else {
            if (a[b.pop()] != s[i]) {
                return false;
            }
        }
    }
    if (b.length > 0) {
        return false;

    }
    return true;
};