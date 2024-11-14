let numbers = [1, 2, 3, 4, 5, 6];
let evenNums = numbers.filter((x) => x % 2 === 0);

console.log(evenNums);

let evenN = numbers.filter(isEven);

console.log(evenN);

function isEven(element) {
  return element % 2 === 0;
}

const ages = [2, 3, 5, 16, 18, 89, 60, 25, 45];

const underAge = ages.filter((age) => age < 18);
console.log(underAge.length);

const mgaUnder = ages.filter(check);
function check(element) {
  return element < 18;
}

console.log(mgaUnder);
