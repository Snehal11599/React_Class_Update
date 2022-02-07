// let student={
//     rollNo:3,
//     name:"khushali",
//     rank:1
class Student{
    constructor(rollno,Name,rank,NumberOne,NumberTwo,AddOne,AddTwo,DivOne,DivTwo)
    {
    this.Name=Name
    this.rollno=rollno
    this.rank=rank
    this.NumberOne=NumberOne
    this.NumberTwo=NumberTwo
    this.AddOne=AddOne
    this.AddTwo=AddTwo
    this.DivOne=DivOne
    this.DivTwo=DivTwo
    }

    School(){
        return `this is ${this.Name} and my roll no is ${this.rollno}`
    }
    Muitiply(){
        return this.NumberOne*this.NumberTwo
    }
    Add(){
        return this.AddOne+this.AddTwo
    }
    Div(){
        return this.DivOne/this.DivTwo
    }
    
}
//  d= new Student(30,'khushi',1,9,8,10,20,100,2)
//  console.log(d.School())
//  console.log(d.Muitiply())
//  console.log(d.Add())
//  console.log(d.Div())

 class Teacher extends Student{
    constructor(rollno,Name,rank,NumberOne,NumberTwo,AddOne,AddTwo,DivOne,DivTwo,NumberThree){
    super(Name,rollno,rank,NumberOne,NumberTwo,AddOne,AddTwo,DivOne,DivTwo)
    this.NumberThree=NumberThree
 }
 shops(){
     console.log(`my number one is${this.NumberOne}`)
     console.log(`my number three is${this.NumberThree}`)
    }
 }
 d= new Teacher(30,'khushi',1,9,8,10,20,100,2,100000)
 console.log(d.shops())

