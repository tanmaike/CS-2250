console.log("Happy is there!");

// guh
/* 
guh
guh
guh 
*/
const PI = 3.14;
let name = "Ethan";
name = "Happy";
console.log(name);

const age = 5 + 4;
console.log(age, name);

function add(a,b) {
    return a + b;
}

const add2 = (a,b) => a+b;

console.log(add(1, 4));

const car = {
    model:"Camry",
    color:"White",
    mileage: 1000
}

car.model = "Mustang";

console.log(car.model);

const fruits = ["Apple", "Grapes", "Mango", "Strawberries", "Durian"];

for (const fruit in fruits) { // index
    console.log(fruit);
}

for (const fruit of fruits) { // elements
    console.log(fruit);
}

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}