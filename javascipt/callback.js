// function hello(){
//     console.log('hello')
// }
// function hi(){
//     console.log('hi')
// }
// function gk(){
//     setTimeout(function(){
//         console.log('gk')
//     },1000)
// }
// let a= hi()
// let b= hello()
// let c= gk()
// console.log(a)
// console.log(b)
// console.log(c)


const PassenGers=[
    {Pname:'khushali',FlightN:'goairway'},
     {Pname:'snehal',FlightN:'airindia'},
     {Pname:'praj',FlightN:'indigo'}
]
function GetNwPassengers(PassenGer,callBack){
    setTimeout(function(){
        PassenGers.push(PassenGer)
        console.log('new passenger pushed successfully')
        callBack()
    },1000)
}
function GetPassengers(){
    setTimeout(function(){
        let str=""
        PassenGers.forEach(function(PassenGer){
            str+=`<h1>${PassenGer.Pname}</h1>`
        })
        document.getElementById('pr').innerHTML=str
        console.log('done')
    },1000)
}

//let newPass={Pname:'harsh',FlightN:'indigo'}
GetNwPassengers({Pname:'harsh',FlightN:'indigo'},GetPassengers)

