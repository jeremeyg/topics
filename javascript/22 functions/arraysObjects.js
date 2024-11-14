const fruits = [
  { name: "apple", color: "red" },
  { name: "bananana", color: "yellow" },
  { name: "orange", color: "orange" },
  { name: "grape", color: "vioelt" },
];

console.log(fruits[0].name);

//push
fruits.push({ name: "coconut", color: "green" });
console.log(fruits);

for (fruit of fruits) {
  console.log(fruit);
}
//  
fruits.forEach((fruit) => console.log(fruit.name));

const fruitNames = fruits.map((fruit) => fruit.name);
console.log(fruitNames);
