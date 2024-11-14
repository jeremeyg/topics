const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

// Result should be: { a: 1, b: 3, c: 4 }, if duplicate, the value from second object should override

//iterating objects through destructuring array

const merged = Object.fromEntries([
  ...Object.entries(obj1),
  ...Object.entries(obj2),
]);

console.log(merged);
