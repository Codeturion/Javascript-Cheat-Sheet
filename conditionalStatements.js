// If else or switch

let today = new Date();
let hour = today.getHours();
console.log(hour);

if (hour >= 6 && hour < 12)
    console.log('Good Morning!');
else if (hour >= 12 && hour < 18)
    console.log('Good afternoon!');
else
    console.log('Good Evening!');


//// SWITCH
switch (hour) {
    case (hour >= 6 && hour < 12):
        console.log('Good Morning!');
        break;
    case (hour >= 12 && hour < 12):
        console.log('Good Afternoon');
        break;
    default:
        console.log('Good Evening!');
        break;
}


