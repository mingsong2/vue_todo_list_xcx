// console.log(33)
/*************************************************************/
// new Promise(resolve=>{
//     setTimeout(()=>{
//         resolve('hello')
//     },2000)
// })
// .then(v=>{
//     console.log(v)
// })

/*************************************************************/
// new Promise(resolve=>{
//     setTimeout(()=>{
//         resolve('hello')
//     },2000)
// })
// .then(v=>{
//     console.log(v)
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve('world')
//         },2000)
//     })
// }).then(v=>{
//     console.log(v+'world')
// })

/*************************************************************/
// new Promise(resolve=>{
//     setTimeout(()=>{
//         resolve('hello')
//     },2000)
// })
// .then(v=>{
//     console.log(v)
//     console.log('everyone')
//     (function(){
//         return new Promise(resolve=>{
//             setTimeout(()=>{
//                 console.log('Mr.laurence')
//                 resolve('Merry Xmas')
//             },2000)
//         })
//     }());
//     return false;
// }).then(v=>{
//     console.log(v+'world')
// },(v)=>{
//     console.log(v)
// })





function get(x){
    return new Promise((resolve,reject)=>{
        if(x=='hello'){
            setTimeout(()=>{
                resolve('hello')
            },2000)
        }else{
            reject('world')
        }
    })
}
async function getHello(){
    // let res = await get('world').catch(err=>{
    //     console.log(err)
    // });

    try{
        var res = await get('world')
    }catch(err){
        console.log(err)
    }
    console.log(res)

}

getHello();



