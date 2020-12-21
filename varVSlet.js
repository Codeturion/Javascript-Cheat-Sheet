// If we use let to define variable locally in a function it will be scope of its block
// If we use var it will be scope of defined function

// var => function-scoped
// ES6: let,const => block-scoped

function testVar(){
    for(var i= 0; i < 5; i++){
        if(true){
            var color = 'red'; /////////////////////
        }
    }

    console.log(color); // Even it is defined out of block we can still access it.
}

function testLet(){
    for(var i= 0; i < 5; i++){
        if(true){
            let color = 'red'; /////////////////////
        }
    }

    console.log(color); // We cannot access it here 
}

///////////////////////////////////////////////////////////////////////////
var color = 'red'; // If we define it with var it will be attached to window.color 
// 3rd library with same name can override this variable
// so avoid attaching to window object
/////////////////////////////////////////////
let age = 30; //If will not be attached to window object
