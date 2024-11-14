let inventory = { apple: 10, banana: 5 };
const updateInventory = (inventory, itemId, quantity) => {
    inventory[itemId] = (inventory[itemId] || 0) + quantity;
};
updateInventory(inventory, "apple", 3); // Result: { apple: 13, banana: 5 }
updateInventory(inventory, "orange", 2); // Result: { apple: 13, banana: 5, orange: 2 }
console.log(inventory);

const sumValues = e => {
    let total = 0;
    for (const number in e) {
        total += e[number];
    }
    return total;
};
const expenses = { food: 100, rent: 400, transport: 50 };
console.log(sumValues(expenses)); // Output: 550

const person = { name: "Charlie", age: 20, job: "Developer" };
// Output: [ "name: Charlie", "age: 20", "job: Developer" ]

const objectToArray = obj => {
    return Object.entries(obj).map(([key, value]) => `${key}: ${value}`);
};
console.log(objectToArray(person));

const filterByLength = (obj, minLength) => {
    return Object.fromEntries(Object.entries(obj).filter(([key]) => key.length > minLength));
};
const data = { name: "Sam", city: "Atlantis", hobby: "swimming" };
console.log(filterByLength(data, 3));
// Output: { name: "Sam", city: "Atlantis" }
