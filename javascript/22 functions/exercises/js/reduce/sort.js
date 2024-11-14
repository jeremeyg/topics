const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

const sorted = users.reduce((acc, curr) => {
  acc.push(curr);
  return acc.sort((a, b) => a.name - b.name);
}, []);

console.log(sorted);
