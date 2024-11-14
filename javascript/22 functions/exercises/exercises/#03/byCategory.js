const products = [
  { id: 1, name: "Laptop", category: "Electronics" },
  { id: 2, name: "Shirt", category: "Clothing" },
  { id: 3, name: "Phone", category: "Electronics" },
  { id: 4, name: "Shoes", category: "Clothing" },
];

function byCategory(products, key) {
  return products.reduce((acc, curr) => {
    if (curr.category === key) {
      acc.push(curr);
    }
    return acc; //return the accumulator for the next iteration
  }, []);
}

console.log(byCategory(products, "Electronics"));
