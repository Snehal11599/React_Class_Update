// var a= new Promise(function(reslove,reject){
//     const b='hello'
//     const c='hello'
//     if(b==c){
//         reslove()
//     }
//     else{
//         reject()
//     }
// })

// a.then(function(){
//     console.log('success')
// }).catch(function(){
//     console.log('error')
// })
var a= new Promise(function(reslove,reject){
    const a= 3
    //const c='hello'
    if(a%2==0){
        reslove()
    }
    else{
        reject()
    }
})

a.then(function(){
    console.log('it is even no')
}).catch(function(){
    console.log('it is odd no')
})