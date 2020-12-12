

function Circle(radius) {
    this.radius = radius

    let defaultLocation = { x: 0, y: 0 }; //this is local variable but we want to access it now

    this.getDefaultLocation = function () { //we can get it this way
        return defaultLocation;
    };

}
this.draw = function () {
    console.log('draw');

    Object.defineProperty(this, "defaultLocation", { //or we can do and directy use circle.defaultLocation
        get: function () { //This is a getter read-only
            return defaultLocation;
        },
        set: function (value) { //this is benefit of setter we can check value before setting it
            if (!value.x || !value.y)
                throw new Error("Invalid location.");
            defaultLocation = value; //this is a setter
        }
    });

};

const circle2 = new circle2(10);
circle.draw();
circle.getDefaultLocation();
circle.defaultLocation;
circle.defaultLocation = 1;
