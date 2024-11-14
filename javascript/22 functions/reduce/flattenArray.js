const matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];
// Result should be: [1, 2, 3, 4, 5, 6]

const flatted = matrix.reduce((acc, curr) => acc.concat(curr), []);

console.log(flatted);

const str = "hello";
// Result should be: { h: 1, e: 1, l: 2, o: 1 }

const strings = str.split("");
console.log(strings);

const occurString = strings.reduce((acc, curr) => {
  if (!acc[curr]) {
    acc[curr] = 0;
  }
  acc[curr]++;
  return acc;
}, {});

console.log(occurString);
