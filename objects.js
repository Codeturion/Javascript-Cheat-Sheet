//this includes
//Fundamentals of object
//factories and constructors
//primitives and reference types
//working with properties
//private properties
//gets and setters

// creating and object without any patterns
// const read-only cannot re-assing
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