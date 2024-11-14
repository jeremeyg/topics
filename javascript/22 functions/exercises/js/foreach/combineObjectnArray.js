const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 28 },
  { name: "Jack", age: 30 },
];

people.forEach((person) => {
  Object.entries(person).forEach(([key, value]) => {
    console.log(`key: ${key}, name: ${value}`);
  });
});

/*
key: name, name: John
key: age, name: 25
key: name, name: Jane
key: age, name: 28
key: name, name: Jack
key: age, name: 30
*/
