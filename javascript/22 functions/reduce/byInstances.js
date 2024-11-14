const products = [
  "milk",
  "bacon",
  "sandwich",
  "milk",
  "coffee",
  "milk",
  "milo",
];
const productList = products.reduce((acc, curr) => {
  if (!acc[curr]) {
    acc[curr] = 1;
  }

  acc[curr]++;
  return acc;
}, {});

console.log(productList);

const numbers = [1, 2, 3, 4, 5];
// Result should be: [2, 4, 6, 8, 10]

const doubled = numbers.map((number) => {
  return number * 2;
});

console.log(`the map way of doubled: ${doubled}`);

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Result should be: [2, 4, 6, 8, 10]
const filteredNum = numbers1.filter(checkEven);

function checkEven(numbers1) {
  return numbers1 % 2 === 0;
}

console.log(filteredNum);

const numbers2 = [10, 20, 30, 40, 50];
// Result should be: 150

const reduceNum = numbers2.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(reduceNum);

const words = ["apple", "banana", "cherry", "blueberry", "strawberry"];
// Result should be: "banana"

const wordCount = words.find(checkWord);

function checkWord(words) {
  return words.length > 5;
}

console.log(wordCount);

const numbers3 = [1, 2, 3, 4, 5];
// Result should be: true

const isPositive = numbers3.every((number) => number > 0);
console.log(isPositive);
