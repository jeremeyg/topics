/*spread operators allows an iterable such as
an array or string to be expanded into seperate elements */

let number = [1, 2, 3, 4, 5];
let maximum = Math.max(...number);
let min = Math.min(...number);
console.log(maximum);
console.log(min);

let username = "jeremy";
let letters = [...username].join("-");
console.log(letters);

let fruits = ["apple", "orange", "banane"];
let junks = ["buger", "fries", "spag"];
let newFruits = [...fruits, ...junks, "eggs", "milk"].join(".");
console.log(newFruits);
