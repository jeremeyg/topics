const items = [
  { name: "Item1", type: "A", quantity: 10 },
  { name: "Item2", type: "B", quantity: 5 },
  { name: "Item3", type: "A", quantity: 15 },
  { name: "Item4", type: "C", quantity: 7 },
];

const itemGroup = items.reduce((acc, curr) => {
  const type = curr.type; //assign the key

  //check acc if its not defined, if not create an empty array
  if (!acc[type]) {
    acc[type] = { totalQuantity: 0, items: [] };
  } else {
    acc[type].totalQuantity += curr.quantity;
  }
  acc[type].items.push(curr);
  return acc;
}, {});

console.log(itemGroup);
