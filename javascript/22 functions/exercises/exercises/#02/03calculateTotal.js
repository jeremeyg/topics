const cart = [
  { item: "Apple", price: 1.0, quantity: 3 },
  { item: "Orange", price: 0.8, quantity: 2 },
];

const totalCart = cart.reduce((acc, curr) => {
  return acc + curr.price * curr.quantity;
}, 0);

console.log(totalCart); // Output: 4.0
