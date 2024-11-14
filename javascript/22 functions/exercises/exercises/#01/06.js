// Group By Property: Given an array of objects, group them by a specified property. For instance, group by the category property.
const items = [
  { name: "Milk", category: "Dairy" },
  { name: "Cheese", category: "Dairy" },
  { name: "Apple", category: "Fruit" },
  { name: "Orange", category: "Fruit" },
];

// Result should be:
// {
//   Dairy: ["Milk", "Cheese"],
//   Fruit: ["Apple", "Orange"]
// }

const groupedProp = items.reduce((acc, curr) => {
  const group = curr.category;
  if (!acc[group]) {
    acc[group] = [];
    acc[group].push(curr.name);
  }
  return acc;
}, {});

console.log(groupedProp);
