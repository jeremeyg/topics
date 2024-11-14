const numbers = [1, 2, 2, 3, 4, 4, 5];
// Result should be: [2, 4]

const noDupe = numbers.reduce((acc, curr) => {
  if (!acc[curr]) {
    acc[curr] = 0;
  }
  acc[curr]++;
  return acc;
}, {});

console.log(noDupe);
const duplicates = Object.keys(noDupe)
  .filter((key) => noDupe[key] > 1)
  .map(Number);

console.log(duplicates);

const singleOut = numbers.reduce((acc, curr));
// Step 1: Create a Map to count occurrences
const occurrences = new Map();

numbers.forEach((num) => {
  occurrences.set(num, (occurrences.get(num) || 0) + 1);
});

// Step 2: Filter out duplicates based on the Map
const dupe = [...occurrences]
  .filter(([key, value]) => value > 1)
  .map(([key]) => key);

console.log(duplicates); // Output: [2, 4]
