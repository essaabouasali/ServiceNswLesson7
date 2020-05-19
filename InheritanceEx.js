// Q1

class Person 
{
    constructor(firstname,lastname,age)
    {
        this.firstname= firstname;
        this.lastname = lastname ;
        this.age = age;
    }
    //Q2
    getinfo()
    {
        return `${this.firstname} is ${this.age} years old` ;
    }

}

// Q3

class Studen extends Person
{
    constructor(firstname , lastname , age , grades)
    {
        super(firstname , lastname , age);
        this.grades = grades ;
    }

    //Q4

    calculateAverage()
    {
        // let sum =0;
        // for(let i=0 ;i<this.grades.length; i++)
        // {
        //     const grade = this.grades[i];
        //     sum += grade ;
        // }
        //return sum / this.grades.length ;
        const total = this.grades.reduce((acc,c)=>acc + c,0);
        return total / this.grades.length ;
        
    }

    // Q5 
    getinfo()
    {
        return super.getinfo() + ` and the average of marks is ${this.calculateAverage()}`;
    }
}

// Q6
class Teacher extends Person
{
    constructor(firstname , lastname ,age , studens)
    {
        super(firstname,lastname,age);
        this.studens = studens;
    }

    calculateAverageofstudent()
    {
        let totalGrades = this.studens.reduce(function (total, student)
        { return total + student.calculateAverage();},0);
        return totalGrades / this.studens.length;
    }
    getinfo()
    {
        return super.getinfo() + ` and the average of the students grade is ${this.calculateAverageofstudent()}`;
    }
}
let me = new Person("essa","abouasali" , 24);
let grades=[90,100,80];
let mestudent= new Studen(me.firstname , me.lastname ,me.age ,grades);
//console.log(mestudent.getinfo());
let students = [
    new Studen("essa","aboasa",24,[100,90,80]),
    new Studen("lucke","parker",20,[100,100,100]),
    new Studen("hiden","hiden",24,[70,70,60]),
    new Studen("dave","wilson",24,[50,50,50])
]
let teacher = new Teacher("elena" , "lucy" , 30,students);
console.log(teacher.getinfo());
