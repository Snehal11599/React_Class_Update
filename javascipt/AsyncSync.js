// document.getElementById(up).addEventListener('click',
// function(f){
//     let d
//     d=f.target.className
//     console.log(d)
// })


//synchronus way -it waits for each operation to complete
for (let i=0;i<10;i++){
    const cell=i
    console.log('synchronus loop number',i)
}
setTimeout(()=>{
    for(let i=0;i<10;i++){                 // asynchronus-it never wait for each opeation to complete
        const cell=i
        console.log('asynchronus loop number',i)
    }
})
console.log('completed')
