// setTimeout(() => {
//     console.log("water is boiling!!")

// }, 7000)

// setTimeout(() => {
//     console.log("steak is ready!!")

// }, 4000)


// setTimeout(() => {
//     console.log("prep for baking!!")
//     setTimeout(() => { 
//         console.log("cake is baked!")
//     },
//         5000)

// }, 3000)

// for (let i = 0; i < 10; i++){
//     setTimeout(() => { 
//         console.log(i)
//     },
//     1000*i)
// }

// console.log("count down starts.")
// for (let i = 20; i >= 0; i--) {
    

    

//     setTimeout(() => {
//         if (i === 0) {
//             console.log(i, "happy birthday")
                
//         }
//         else {
//             console.log(i, "seconds")

//         }
            
//         },
//             1000 * (i - 19))
    
// }
// // // console.log("Happy birthy!!")

// // for loop, 0 -> 20
// //inside for loop, if else conditional, yes? bomb , no ? count
// //

// // for (let i = 0; i < 21; i++){
// //     setTimeout(() => {
// //         if (i === 20) {
// //             console.log(`exploded!!!`)
            
// //         }
            
// //         else {
// //             console.log(`tick tick ${21 - i}`)

// //         }
        
// //     }, i * 1000)
// // }

// let promise = new Promise((resolve) => {
//     setTimeout(()=> {
//         resolve('finish in 2 sec')
//     }, 2000)
// }
// ).then(res => console={.log(res)})  //wAIT FOR promise to finish


// let promise2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('finish in 2 sec')
//     }, 2000)
// }
// ).then(res => console = {.log(res) })  //wAIT FOR promise to finish

// const something = async () => {
//     const promise2 = await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('finish in 2 seconds')
//         }, 2000)
//     })
// }

async function proMaker(msg, time) {
    const promise1 = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(msg)
        }, time)
    })
    console.log(promise1)
}

async function main() {
    

   await proMaker("finish in 2 second", 2000)
    console.log("btw 1 and 2")

    await proMaker("finish in 4 second", 4000)
    console.log("btw 2 and 3")

    await proMaker("finish in 6 second", 6000)
}
main()

