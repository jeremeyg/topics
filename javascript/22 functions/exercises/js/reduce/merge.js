const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { d: 5 };

const merged = [obj1, obj2, obj3].reduce((acc, obj) => {
  return { ...acc, ...obj };
}, {});

console.log(merged);
// Output: { a: 1, b: 3, c: 4, d: 5 }
