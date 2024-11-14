const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNum = [...new Set(numbers)];

console.log(uniqueNum);

const keyNum = uniqueNum.keys();
for (let x of keyNum) {
  console.log(x);
}

//using reduce

const bagoNum = numbers.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(bagoNum);

//iterate over indeci

const indices = bagoNum.map((_, index) => index).filter((index) => (index = 0));
console.log(indices);
