const numbers = [10, 5, 100, 50];

// const max = numbers.reduce(
//   (acc, curr) => (curr > acc ? curr : acc),
//   numbers[0]
// );
// console.log(max);
// Output: 100

const maxValue = numbers.reduce((checkValue, value) => {
    return value > checkValue ? value : checkValue;
}, numbers[0]);
console.log(maxValue);
