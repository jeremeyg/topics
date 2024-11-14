const nestedArrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const flattened = nestedArrays.reduce((acc, curr) => acc.concat(curr), []);

console.log(flattened);
// Output: [1, 2, 3, 4, 5, 6]
