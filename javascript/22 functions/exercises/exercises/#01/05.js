const obj = { name: "Alice", age: 25 };

// Result should be: { NAME: "Alice", AGE: 25 }

const keyUpper = Object.fromEntries(
  Object.entries(obj).map(([key, value]) => [key.toUpperCase(), value])
);

console.log(keyUpper);
