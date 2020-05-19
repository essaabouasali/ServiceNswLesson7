// Q1

class Square
{
    constructor(sidelength)
    {
        this.sidelength = sidelength ;
    }
    // q2
    get area()
    {
        return this.sidelength * this.sidelength ;
    }
    // q3
    set area(input)
    {
        this.sidelength = Math.sqrt(input);
    }
}

let square = new Square(10);
console.log(square);
console.log(square.area);
square.area = 5;
console.log(square.sidelength);
