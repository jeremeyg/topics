const obj = { a: 5, b: 15, c: "hello", d: 20 };

// Result should be: { b: 15, d: 20 }, greater than 15

const filteredObjecs = Object.entries(obj).filter(
  ([key, value]) => typeof value === "number" && value > 10
);
console.log(filteredObjecs);
