setTimeout(() => {
    console.log('100');
})
new Promise((res, rej) => {
    console.log('prmise1');

    setTimeout(() => {
        console.log('30');

        res(10)
    })
}).then(
    (res) => {
        console.log('22');
        return res * 2
    }
).then(
    (res) => {
        console.log(res + 1);
    }
)
setTimeout(() => {
    console.log('40');

})
console.log('10');