const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mouse" },
  { id: 3, name: "Keyboard" },
];

const productId = 2;
const product = products.find((p) => p.id === productId);
console.log(product);

/*
find Method: The find method iterates over the array and returns the first element that satisfies the condition provided by the callback function.
Callback Function: The callback function p => p.id === productId checks if the id of the current product (p) matches the productId. */
