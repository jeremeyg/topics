const products = [
  { name: "Milk", price: 1.5 },
  { name: "Coffee", price: 3.0 },
  { name: "Tea", price: 2.5 },
];
// Result should be: sorted by price from lowest to highest

const sorted = products.sort((a, b) => a.price - b.price);
console.log(sorted);
