const people = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 21 },
  { name: "David", age: 25 },
];
// Result should be: { 21: ["Alice", "Charlie"], 25: ["Bob", "David"] }

const groupedByPeople = people.reduce((acc, curr) => {
  const age = curr.age;
  if (!acc[age]) {
    acc[age] = [];
  }
  acc[age].push(curr.name);
  return acc;
}, {});

console.log(groupedByPeople);
