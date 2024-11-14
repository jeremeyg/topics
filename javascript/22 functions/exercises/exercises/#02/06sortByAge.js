const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

/*
[
  { name: 'Bob', age: 25 },
  { name: 'Alice', age: 30 },
  { name: 'Charlie', age: 35 }
]

*/

const sortAge = users.sort((a, b) => a.age - b.age);
console.log(sortAge);
