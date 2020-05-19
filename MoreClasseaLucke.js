// Getters and Setters

// class Person {
//     constructor(firstName, lastName, age, heightInMm) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.heightInMm = heightInMm;
//     }

//     get heightInInches() {
//         return this.heightInMm / 25.4;
//     }

//     set heightInInches(value) {
//         this.heightInMm = value * 25.4;
//     }

//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }

//     // get heightInCm() {
//     //     return this.heightInMm / 10;
//     // }
// }

// let me = new Person("Luke", "Parker", 23, 1800);
// console.log(me);
// console.log(me.fullName);
// me.fullName = "Daniel Matthews";
// console.log(me.fullName);

// console.log(me.heightInInches);
// me.heightInInches = 72;
// console.log(me.heightInInches);



// console.log(me.heightInCm);
// console.log(me.heightInMm);
// me.heightInInches = 72;
// console.log(me.heightInMm);
// console.log(me.heightInInches);
// console.log(me.heightInCm);

// class Rectangle {
//     constructor (height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     get area() {
//         return this.height * this.width;
//     }
// }

// let myRect = new Rectangle(12,4);
// console.log(myRect.area);


class Pet {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    
    getInfo() {
        return `${this.name} the ${this.species} is ${this.age} years old. `;
    }
}

class Dog extends Pet {
    constructor (name, age, breed) {
        super(name, age, "Dog");
        this.breed = breed;
    }

    getBreedInfo() {
        return `${this.name} is a ${this.breed}. `;
    }

    getInfo() {
        return `${this.name} the ${this.species} is ${this.age} years old. ${this.name} is a ${this.breed}. `;
    }
}

class Beagle extends Dog {
    constructor (name, age) {
        super(name, age, "Beagle");
    }
    // getInfo() {
    //     return super.getInfo() + "Beagles are awesome!";
    // }
}

let cat = new Pet ("Felix", 2, "Cat");
let staffy = new Dog ("Rex", 4, "Staffy");
let beagle = new Beagle ("Scruff", 7);
console.log(cat.getInfo());
console.log(staffy.getInfo());
console.log(beagle.getInfo());
console.log(staffy.getBreedInfo());
console.log(beagle.getBreedInfo());