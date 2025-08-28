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