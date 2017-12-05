// Classes
'use strict';

class Shape {
    static getStaticValue() {
        return 42;
    }

    constructor(id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move(x, y) {
        this.x = x
        this.y = y
    }
}

var shape = new Shape(1, 2, 3);
shape.move(1, 1);
console.log(shape);

// Static functions
console.log(Shape.getStaticValue());

// Inheritance
class Circle extends Shape {
    constructor(id, x, y, radius) {
        super(id, x, y)
        this.radius = radius
    }
}

var circle = new Circle(1, 2, 2, 10);
console.log(`x: ${circle.x}, y: ${circle.y}`);

// Getters/setters
class Rectangle {
    constructor(width, height) {
        this._width = width
        this._height = height
    }
    
    get area() { 
        return this._width * this._height 
    }   
}
var r = new Rectangle(50, 20)
r.area === 1000
console.log(r.area)

r.area = 10; //Error (because of strict mode)
