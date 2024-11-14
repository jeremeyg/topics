const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mouse" },
  { id: 3, name: "Keyboard" },
];

//['Laptop', 'Mouse', 'Keyboard']

const productName = products.map((product) => product.name);
console.log(productName);
