const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

// 1. Access and log the brand and model of the car.
// 2. Change the year of the car to 2022 and log the updated car object.

console.log(car.brand);
car.brand = 2022;
console.log(car.brand);
console.log(car);

const fruit = {
    name: "Apple",
    color: "Red",
    quantity: 10
};

// Use a variable to access the 'quantity' property of the fruit object.
const property = "quantity";

console.log(fruit[property]);
console.log(fruit.property);

const person = {
    name: "Alice",
    address: {
        city: "New York",
        zip: "10001"
    },
    hobbies: ["reading", "hiking"]
};

// 1. Log the city where the person lives.
// 2. Add a new hobby, "cooking", to the hobbies array and log the updated person object.

console.log(person.address.city);
person.hobbies = [...person.hobbies, "coding"];
person.hobbies.push("walking");
console.log(person.hobbies);

const scores = {
    math: 90,
    science: 85,
    english: 78
};

// Calculate and log the average score.

const total = Object.values(scores).reduce((sum, a) => sum + a, 0);
console.log(`object.values(scores) when looping through objects value only:${total}`);

let totalScore = 0;
let countScore = 0;
for (let subScore of scores) {
    totalScore += subScore;
    countScore++;
}
const average = totalScore / countScore;
console.log(average);

for (let subjects in scores) {
    console.log(scores[subjects]);
    console.log(scores[subjects]);
}

const students = [
    { name: "John", grade: 85 },
    { name: "Jane", grade: 92 },
    { name: "Alice", grade: 78 }
];

// 1. Access and log each student's name.
// 2. Calculate and log the average grade.

students.forEach(student => console.log(student.name));
const totalGrade = students.reduce((sum, student) => sum + student.grade, 0);
const averageStudent = totalGrade / students.length;
console.log(`averageStudent:${averageStudent}`);
