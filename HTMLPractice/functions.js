//first way
function first(name,country){
    console.log(`My name is ${name} and I am from ${country}`)
}
first('snehal','India')

//second way
const second=function(a,b){
    console.log(`addition is of ${a} and ${b} is ${a+b}` )
}
second(20,30)

//third way
const third=(a,b)=>{
    console.log(`substraction of ${a} and ${b} is ${a-b}`)
}
third(70,60) 
 
let Student={
    roll_no:'5',
    name:'snehal',
    class:'8th'
} 
   for(let g in Student){
       console.log(`${g} and ${Student[g]}`)
   }

//var is non-blockage variable
   var a=10 //global variable
   {
       var a=80//local varible
       console.log(a)
   }
   console.log(a)


  //let is blocakge variable 
  let b=70
  {
      let b=90
      console.log(b)
  } 
  console.log(b)

  //const is also blocakge variable 
   const c=97 
   {  // once value is defined using const we can not change
       const c=90
       console.log(c)
   }
   console.log(c)

// let i=0
// while(i<100){
//     console.log(i)
//     i++
// }

let sum=0
for(let i=0; i<=100; i++){
    sum=sum+i
    console.log(sum)
}

