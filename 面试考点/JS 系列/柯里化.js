function add(a, b, c) {
    return a + b + c
}
function sub_curry(fn, ...args) {
    return function (...args2) {
        const newarr = [...args, ...args2]
        fn(...newarr)
    }
}
function curry(func, length) {
    length = length || func.length

    return (...args) => {
        console.log(args.length, length, args);

        if (args.length < length) {
            const combined = [func, ...args]
            return curry(sub_curry(...combined), length - args.length)
        }
        console.log(args);
        return func(...args)
    }
}

add(1, 2)

const addCurry = curry(add)


addCurry(1)(2)(3)
