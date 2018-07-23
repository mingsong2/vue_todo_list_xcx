// function sleep(second) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(' enough sleep~');
//         }, second);
//     })
// }
// function normalFunc() {
//     console.log('normalFunc');
// }
// async function awaitDemo() {
//     await normalFunc();
//     console.log('something, ~~');
//     let result = await sleep(5000);
//     console.log(result);// 两秒之后会被打印出来
// }
// awaitDemo();


fn = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, 2000)
    })
}
const Fn = async () => {
    // 加了await和不加await的区别
    // 加了await 则await下面的所有代码都要等待fn()执行完毕， 结果为：2s后先打印1再打印2
    // 不加await 则先打印2，2s后在打印1
    // await fn().then(v=>console.log(v));
    fn().then(v=>console.log(v))
    console.log(2)
}
Fn()