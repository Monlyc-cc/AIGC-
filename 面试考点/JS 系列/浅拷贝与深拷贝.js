// 浅拷贝
const obj = {
    a: 1,
    b: [],
    c: undefined,
    d: null,
    e: Symbol('a'),
    f: () => { },
    e: new Map([['a', 1], ['b', 2]])
}
function shallowCopy(obj) {
    const newObj = {}
    for (let key in Object.keys(obj)) {
        newObj[key] = obj[key]
    }
    return newObj
}
console.log(new Object(obj));
console.log(shallowCopy(obj));




// 深拷贝

// 自带的函数

// console.log(JSON.parse(JSON.stringify(obj))); // 将对象转为json字符串，转回对象 // 无法拷贝函数，symbol，undefined，bigint
// console.log(structuredClone(obj)); // 深拷贝 // 无法拷贝函数，symbol，undefined，bigint

// function deepCopy(obj) {
//     return new Promise((res, rej) => {
//         // 创建消息通道，包含两个双向通信的端口
//         const [port1, port2] = new MessageChannel();

//         // 关键：启动端口（MessageChannel 端口需要显式启动才能通信）
//         port1.start();
//         port2.start();

//         // 向 port1 发送目标对象
//         port1.postMessage(obj);

//         // 监听 port2 的消息接收事件
//         port2.onmessage = (e) => {
//             console.log("接收到消息：", e.data);
//             // 接收到消息后 resolve Promise，返回消息内容
//             res(e.data);
//             // 通信完成后关闭端口，释放资源
//             port1.close();
//             port2.close();
//         };

//         // 补充：监听错误事件，处理通信异常
//         port2.onerror = (err) => {
//             console.error("消息通道出错：", err);
//             // 出错时 reject Promise
//             rej(err);
//             // 关闭端口
//             port1.close();
//             port2.close();
//         };
//     });
// }
// deepCopy(obj).then((data) => {
//     obj.b.push(1)
//     console.log(data);
// })




// 手搓一个深拷贝

function myDeepcopy(obj) {
    if (!obj || !(obj instanceof Object)) {
        return obj
    }

    if (obj instanceof Date) {
        return new Date(obj)
    }
    if (obj instanceof RegExp) {
        return new RegExp(obj)
    }

    let newObj = new obj.constructor()

    if (obj instanceof Map) {
        obj.forEach((value,key) => {
            newObj.set(key,myDeepcopy(value))
        });
    }

    if (obj instanceof Set) {
        obj.forEach(value => {
            newObj.add(myDeepcopy(value))
        });
    }



    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = myDeepcopy(obj[key])
        }
    }
    return newObj
}

console.log(myDeepcopy(obj));
