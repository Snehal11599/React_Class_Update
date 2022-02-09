// async function adds(){
//     console.log(3+4,'this is add function')
//     return Promise.resolve(1)
// }
// adds ().then(function(op){
//     console.log(op)
// })
 async function subtract(){
     console.log(10-1,'this is subtract function')
     const response =await fetch('https://fakestoreapi.com/products')
     const users = await response.json()
     return users
 }

 let x= subtract()
 console.log(x)
 x.then(data=>console.log(data))