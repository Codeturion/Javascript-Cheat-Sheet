//Hide properties and methods from outside
//Simpler interface because of few properties.
//Reduce of the impact of change.
//Reduce complexity.
//Show only essentials


////EXAMPLE WITHOUT ABSTRACTION
function Circle(radius) {
    tihs.radius = radius;

    this.defaultLocation = { x: 0, y: 0 }; // we are going to hide tihs nad below function
    this.computeOptimumLocation = function () { //because it is public to everywhere one implementation like adding arguments will
        //break everything
        //....
    }

    this.draw = function () {
        this.computeOptimumLocation(); //if this was not public we only modify it here.
        console.log('draw');
    };
}

const circle = new circle(10);
circle.defaultLocation = false; //In this way they have access to function
//with setting it to false it will messup the object
//What we want to make here is call this function only in draw method in this example.
//////////////////////////////////////////////////////////////////////////////////////////////

//WITH ABSTRACTION
function Circle2(radius) {
    this.radius = radius
    //we use this instead of this.defaultLocation so this is only a local variable.
    let defaultLocation = { x: 0, y: 0 };

    let computeOptimumLocation = function (factor) { //This is now also local.
        //bla bla
    }

    this.draw = function () {
        computeOptimumLocation(0.1); //can only access it here not outside this function

        //this.radius to access to radius
        //when we call draw all variables will be recreated and it will die
        console.log('draw');
    };

    const circle2 = new circle2(10);
    circle.draw();
    //now circle has only draw and radius
  
}


