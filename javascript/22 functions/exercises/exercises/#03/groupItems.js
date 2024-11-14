const products = [
  { id: 1, name: "Laptop", category: "Electronics" },
  { id: 2, name: "Shirt", category: "Clothing" },
  { id: 3, name: "Phone", category: "Electronics" },
  { id: 4, name: "Shoes", category: "Clothing" },
];

const grouped = products.reduce((acc, curr) => {
  const group = curr.category;
  if (!acc[group]) {
    acc[group] = [];
  }
  acc[group].push(curr);
  return acc;
}, {});

console.log(grouped);
