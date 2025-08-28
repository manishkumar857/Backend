//factory function
// function PersonMaker(name,age){

//     const person = {
//         name:name,
//         age:age,
//         talk(){
//             console.log(`hi my name is ${name}`);
//         }
//     };
//     return person;

//     let p1 = PersonMaker("Manish",23); //creates its own copy of talk function
//     let p2 = PersonMaker("Manisha",21);//creates its own copy of talk function which takes lots of memory

// }


// //constructor- doesn't return anything and start with capital letter
// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     console.log(this);
// }
// Person.prototype.talk= function(){
//     console.log(`this is the name ${this.name} `);
// }

// let p1=new Person("Manish",23);
// let p2=new Person("Manisha",21);

// class Person{
//     constructor (name,age){
//         this.name=name;
//         this.age=age;
//     }
//     talk(){
//         console.log(`this is name ${this.name}`);
//     }
// }

// let p1 = new Person("Rohit",21);


//inheritance
class Person {
    constructor (name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`this is name ${this.name}`);
    }
}

class Student extends Person{
    constructor(name,age,marks){
        console.log("student constructor called");
        super(name,age); //parent class constructor is being called
        this.marks=marks;
    }
}

class Teacher extends Person{
    constructor(name,age,subject){
        console.log("teacher constructor called");
        super(name,age); //parent class constructor is being called
        this.subject=subject;
    }
}