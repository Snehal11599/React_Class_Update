// let Employee ={
//     firstname:"Snehal",
//     lastname:"chavan",
//     employeeid:789
// }
// if i want this for multiple people then i have to create seperate object for each employee
// so we use constructor for this

class Company {
    constructor(firstname, lastname, employeeid,num1,num2) {
        this.firstname = firstname
        this.lastname = lastname
        this.employeeid = employeeid
        this.num1=num1
        this.num2=num2
    }

    Data() {
        return `this is ${this.firstname}  ${this.lastname} and my emplooye ID ${this.employeeid} `
    } 
    
    Add(){
        return `Addition is ${this.num1+this.num2}`
    }

    Sub(){
        return `Substraction is ${this.num1-this.num2}`
    }

    Multi(){
        return `Mutiplication is ${this.num1*this.num2}`
    }

    Div(){
        return `Division is ${this.num1/this.num2}`
    }
}

//if want to add some more properties to existing properties then we use inheritance
class Connect extends Company{
    constructor(firstname, lastname, employeeid,num1,num2,num3){
        super(firstname, lastname, employeeid,num1,num2)
        this.num3=num3
    }

Number(){
    console.log(`this is first number ${this.num1}`)
    console.log( `this is third number ${this.num3}`)
}
   
}

Emp = new Company("Snehal", "chavan", 787897,50,40)
Emp1 = new Company("Khushali", "Argade", 56757)
Emp3=new Connect("prajakta","Danake",18999,10,20,30)
console.log(Emp)
console.log(Emp1)
console.log(Emp.Data())
console.log(Emp.Add())
console.log(Emp.Sub())
console.log(Emp.Multi())
console.log(Emp.Div())
console.log(Emp3.Number())
