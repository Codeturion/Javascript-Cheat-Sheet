// FACTORY FUNCTION
// If object has behavior like draw function.
// This is a factory function it returns a new object
// Instead of this.radius = radius
// Because names are the same we can use radius only

function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('this created by factory');
        }
    };
}

const circle = createCircle(1);
circle.draw();

// Constructor Function
// First letter should be uppercase
// Similar to c# class
// Uses javascripts native constructor
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('this created by constructor');
    }
}
// Dont forget write new
const anotherCircle = new Circle(1);
anotherCircle.draw();

// Functions are objects too.
const Circle1 = new Function('radius', `
this.radius = radius;
    this.draw = function () {
        console.log('functions are object too');
    }`);

const circle2 = new Circle1(1);
circle2.draw();

// We can call function with this
// {} is empty object
// This is same as const circle = new Circle(1);
Circle.call({},1);

// This passes array as arguments good if you have arrays.
Circle.apply({},[1,2,3]);
