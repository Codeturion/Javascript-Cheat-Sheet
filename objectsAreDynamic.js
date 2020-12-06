//Objects are dynamic 
//That means after we create them
//We can add extra properties or delete them.
//We dont have to define the properties or change the class before-hand .
//This make JS powerful.

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(10);

//Dot notation
//Easier
circle.location = { x: 1 }; //Added location properties to circle

//Bracket notation
//better for dynamic changing.
//Also dot notation doesnt work variable like 'center-location' because of - and special character and spaces.
const propertyName = 'center location';
circle[propertyName] = { x : 1 };

delete circle.location; //This deletes properties;
delete circle[propertyName];



for(let key in circle){
    console.log(key,circle[key]); //logs properties and methods.
    // circle[key] prints values
}

for(let key in circle){
    if(typeof circle[key] !== 'function')
    console.log(key,circle[key]); //thiss will print values that are not function
}

const keys = Object.keys(circle); //This will return all keys as array
console.log(keys);

if('radius' in circle) // check if we have this property
console.log('Circle has a radius.');


