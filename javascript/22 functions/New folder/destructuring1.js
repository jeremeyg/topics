//1. swapping
let a = "miya";
let b = "maya";

[a, b] = [b, a];

console.log(a);
console.log(b);

//2. swap elements in an array
let twins = ["1miya", "miya"];

[twins[0], twins[1]] = [twins[1], twins[0]];

console.log(twins);

//3 assigning array as variables

let info = ["John", "Bob"];
let [firstName, lastName] = info;
console.log(firstName); // john
console.log(lastName);

//4extract values from objects

const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  job: "Fry Cook",
};

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 34,
};

const {
  firstName: ofirstName,
  lastName: olastName,
  age,
  job: unemploted,
} = person1;
console.log(ofirstName);

//5. destructure in function parameters
