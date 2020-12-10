//if else or switch

let today = new Date();
let hour = today.getHours();
console.log(hour);

if(hour >= 6 && hour < 12)
    console.log('Good Morning!');
else if(hour >= 12 && hour < 18)
    console.log('Good afternoon!');
else
    console.log('Good Evening!');


