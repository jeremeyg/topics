const numbers = [10, 20, 30, 40, 50];
// Result should be: 30

const sum = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum);

const average = sum / numbers.length;
console.log(average);
