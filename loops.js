// For - loops through a block of code a number of times

for (let i = 0; i < 5; i++){
console.log(i);
//if(i == 2)
//break;
} // The break statement, without a label reference, can only be used to jump out of a loop or a switch.


// for/in - loops through the properties of an object

var person = {fname:"John", lname:"Doe", age:25};
// Person is an array
// Output will be John then Doe then 25

var x;
for (x in person) {
  console.log(person[x]);
}


// for/of - loops through the values of an iterable object
// The JavaScript for/of statement loops through the values of an iterable objects.
// for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.
var cars = ["BMW", "Volvo", "Mini"];
var x;

for (x of cars) {
  console.log(x);
}
// Output would be BMW then Volvo then Mini


// WHILE
// The code in the loop will run, over and over again, as long as a variable (i) is less than 10:
let i = 0;
while (i < 10) {
    console.log("The number is " + i);
    i++;
  }

  i = 0;
  // DO WHILE
  // The loop will always be executed at least once, 
  // Even if the condition is false, 
  // Because the code block is executed before the condition is tested:
  do {
    console.log("The number is " + i);
    i++;
  }
  while (i < 10);


