const sales = [
  { month: "January", amount: 100 },
  { month: "February", amount: 150 },
  { month: "March", amount: 200 },
];

const runningTotal = sales.reduce((acc, curr) => {
  acc.push((acc.length ? acc[acc.length - 1] : 0) + curr.amount);
  return acc;
}, []);

console.log(runningTotal);
// Output: [100, 250, 450]
