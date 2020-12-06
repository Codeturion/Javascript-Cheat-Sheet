//declaring primitives
// x and y are independent

let x = 10;
let y = x;
x = 20;
//at the end x = 20 and y = 10;

///////////////////////////////////////////////////////////

//now we turn them to objects
let xObject = { value: 10 };
let yObject = xObject;

xObject.value = 20;
//at the end xObject.value = 20 and y = 20;
//instead of storing variable. Objects are stored in memory. 
//so yObject has xObject's memory address. 
// xObject and yObject are pointing same address in the memory.
//so if we modify xObject yObject will also change.

////////////////////////////////////////////////////////////
/////                !!IMPORTANT!!
//Primitives are copied by their value.
//Objects are copied by their reference.

/////////////////////////////////////////////////////////////
let number = 10;
function increase(number) {
    number++; //because this is a independent local variable.
    //number will go out of scope after this function
}

increase(number);
console.log(number); //this will log number 10 because primitives copied by their value

let obj = {value:10};

function increase(obj){
    obj.value++;
}

increase(obj);
console.log(obj); //This will log number 11 because it will point into same obj.
