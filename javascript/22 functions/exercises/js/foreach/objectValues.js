const expenses = {
  rent: 1200,
  groceries: 300,
  utilities: 150,
};

Object.values(expenses).forEach((val) => {
  console.log(`expenses: ${val}`);
});
