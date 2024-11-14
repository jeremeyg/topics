//group by property

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 35 },
  { name: "Eve", age: 25 },
];

const groupedByage = people.reduce((acc, curr) => {
  const age = curr.age;
  if (!acc[age]) {
    //!people.age
    acc[age] = []; // people[age] = [] 25:[]
  }
  acc[age].push(curr); //
  return acc;
}, {});

console.log(groupedByage);

const groupAge = people.reduce((acc, curr) => {
  const age = curr.age;
  if (!acc[age]) {
    acc[age] = [];
  }
  acc[age].push(curr);
  return acc; //s
}, {});

console.log(groupAge);
