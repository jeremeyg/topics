const products = [
    { id: 1, name: "Laptop", category: "Electronics" },
    { id: 2, name: "Mouse", category: "Accessories" },
    { id: 3, name: "Keyboard", category: "Accessories" },
    { id: 4, name: "Phone", category: "Electronics" }
];

const grouped = products.reduce((acc, curr) => {
    const category = curr.category;
    if (!acc[category]) {
        acc[category] = [];
    }
    acc[category].push(curr);
    return acc;
}, {});

console.log(grouped);

const countGroups = products.reduce((acc, categ) => {
    acc[categ.category] = (acc[categ.category] || 0) + 1;
    return acc;
}, {});
console.log(countGroups);
/*
{
  Electronics: [
    { id: 1, name: 'Laptop', category: 'Electronics' },
    { id: 4, name: 'Phone', category: 'Electronics' }
  ],
  Accessories: [
    { id: 2, name: 'Mouse', category: 'Accessories' },
    { id: 3, name: 'Keyboard', category: 'Accessories' }
  ]
}

*/
