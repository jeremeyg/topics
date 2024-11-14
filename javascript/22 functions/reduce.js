/*
.reduce() = reduce the elements of an array to a single value 
reduce(callbackFn , initialValue)
*/

const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce((acc, curr) => acc + curr, 0);
console.log(total);
