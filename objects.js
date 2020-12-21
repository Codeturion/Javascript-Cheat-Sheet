// This includes
// Fundamentals of object
// Factories and constructors
// Primitives and reference types
// Working with properties
// Private properties
// Gets and setters

// Creating and object without any patterns
// Const read-only cannot re-assing
const circle = {//{} is object literal synthax
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () { //draw is a method
        console.log("draw");
    }
};

circle.draw();