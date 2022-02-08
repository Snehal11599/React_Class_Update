var a= new Promise(function(reslove,reject){
    const b='hello'
    const c='hello'
    if(b==c){
        reslove()
    }
    else{
        reject()
    }
})

a.then(function(){
    console.log('success')
}).catch(function(){
    console.log('error')
})