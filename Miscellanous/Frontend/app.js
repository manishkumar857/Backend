//factory function
function PersonMaker(name,age){

    const person = {
        name:name,
        age:age,
        talk(){
            console.log(`hi my name is ${name}`);
        }
    };
    return person;

    let p1 = PersonMaker("Manish",23); //creates its own copy of talk function
    let p2 = PersonMaker("Manisha",21);//creates its own copy of talk function which takes lots of memory

}


//constructor- doesn't return anything and start with capital letter
function Person(name,age){
    this.name=name;
    this.age=age;
    console.log(this);
}
Person.prototype.talk= function(){
    console.log(`this is the name ${this.name} `);
}

let p1=new Person("Manish",23);
let p2=new Person("Manisha",21);