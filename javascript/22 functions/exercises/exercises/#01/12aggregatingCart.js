const cart = [
  { name: "Apple", quantity: 2 },
  { name: "Banana", quantity: 3 },
  { name: "Apple", quantity: 1 },
];

function aggregateCart(cart) {
  // Use reduce to aggregate quantities
  const aggregated = cart.reduce((acc, curr) => {
    // Check if the item already exists in the accumulator
    if (acc[curr.name]) {
      // If it exists, add the current quantity to the existing quantity
      acc[curr.name].quantity += curr.quantity;
    } else {
      // If it doesn't exist, create a new entry with the current quantity
      acc[curr.name] = { name: curr.name, quantity: curr.quantity };
    }
    return acc;
  }, {});

  // Convert the accumulated object into an array
  return Object.values(aggregated);
}

const aggregatedCart = aggregateCart(cart);
console.log(aggregatedCart);
// Output: [ { name: 'Apple', quantity: 3 }, { name: 'Banana', quantity: 3 } ]
