//Prodecural implementation
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    let calculatedSalary = baseSalary + (overtime * rate);
    console.log('Prodecural salary: ' + calculatedSalary);
    return calculatedSalary;
}

let salary;
salary = getWage(baseSalary, overtime, rate);

//object oriented way and encapsulation
//function has no params which is good. 
//uses properties of object instead of params.
//part of one unit.
//Reduce complexity + increase reusability

let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function () {
        let calculatedSalary = this.baseSalary + (this.overtime * this.rate);
        console.log('OOP Salary: ' + calculatedSalary);
        return calculatedSalary;
    }
};
employee.getWage();
