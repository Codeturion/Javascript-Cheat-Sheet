//if object has behavior like draw function.
//this is a factory function it returns a new object
//Instead of this.radius = radius
//Because names are the same we can use radius only
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
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('this created by constructor');
    }
}
//Dont forget write new
const anotherCircle = new Circle(1);
anotherCircle.draw();