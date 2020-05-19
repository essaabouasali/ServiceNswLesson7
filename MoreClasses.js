// Getters and Setters 


// class Person
// {
//     constructor(name, age ,heighInMm)
//     {
//         this.name= name;
//         this.age = age;
//         this.heighInMm = heighInMm;
//     }
//     get heightInInches()
//     {
//         return this.heighInMm / 25.4;
//     }
//     get heightInCm()
//     {
//         return this.heightInMm / 10;
//     }
//     set heightInInches(value)
//     {
//         this.heighInMm = value * 25.4;
//     }
// }


// let me = new Person("lucke",23,1800);
// //console.log(me);
// //console.log(me.heightInInches) // creat fake properity 
// console.log(me.heighInMm);
// me.heightInInches = 72;
// console.log(me.heightInInches);
// //console.log(me.heighInCm);
// console.log(me.heighInMm);


// Inheritance

class Pet
{
    constructor(name , age , species)
    {
        this.name=name;
        this.age =age;
        this.species = species;
    }

    
    getinfo()
    {
        return `${this.name} the ${this.species} is ${this.age} years old.`
    }
}

class Dog extends Pet
{
    constructor(name , age ,breed)
    {
        super(name , age , "Dog");
        this.breed = breed ;
        
    }

    getinfo()
    {
        return super.getinfo() + ` ${this.breed}`;
    }

}

class Beagle extends Dog
{
    constructor(name , age)
    {
        super(name , age , "beagle");
    }
}

let cat = new Pet("felix", 2 , "Cat");
let dog = new Dog("prono", 4 ,"beagle");
//console.log(dog);

console.log(cat.getinfo());
console.log(dog.getinfo());