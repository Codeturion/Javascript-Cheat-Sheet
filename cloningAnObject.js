const circle = {
    radius: 1,
    draw(){
        console.log('draw');
    }
};




//Simplier way:
const simpleCopyCircle = {...circle};

//Cloning.
const copiedCircle = Object.assign({},circle);

//Cloning then adding new properties
const anotherCopiedCircle = Object.assign({color: 'yellow'},circle);

