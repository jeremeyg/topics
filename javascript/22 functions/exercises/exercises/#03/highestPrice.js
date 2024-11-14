const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Shirt", price: 30 },
  { id: 3, name: "Phone", price: 600 },
];

const highestPrice = products.reduce((max, product) => {
  return product.price > max ? product.price : max;
}, 0);

console.log(highestPrice);
