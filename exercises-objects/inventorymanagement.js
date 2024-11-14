// Inventory Management
// Define an object for a store inventory with items and quantities.
// Write a function that adds a new item to the inventory or updates
// the quantity if it already exists.
//https://chatgpt.com/c/67273aac-4228-8000-904b-d7d056a24dc3
//array of object
const skincareProducts = [
    { name: "Cleanser", quantity: 2 },
    { name: "Toner", quantity: 1 },
    { name: "Moisturizer", quantity: 3 },
    { name: "Sunscreen", quantity: 1 },
    { name: "Exfoliant", quantity: 2 },
    { name: "Serum", quantity: 1 },
    { name: "Face Mask", quantity: 4 },
    { name: "Eye Cream", quantity: 1 }
];

function addskinCareProducts(product, key, value, quantity) {
    const itemProduct = product.find(item => item[key] === value);
    if (itemProduct) {
        itemProduct.quantity += quantity;
    }
    const newItem = {};
    newItem[key] = value;
    newItem.quantity = quantity;
    product.push(newItem);
    return `${value} added with ${quantity} quantity `;
}
const item1 = addskinCareProducts(skincareProducts, "name", "Retinol", 5);
console.log(item1);

//for object
const skin1004 = {
    cleanser: 1,
    "cleansing oil": 1,
    "azelaic acid": 1
};
function addskin1004(product, key, quantity) {
    if (product[key]) {
        product[key] += quantity;
    } else {
        product[key] = quantity;
        return product[key];
    }
}

addskin1004(skin1004, "centella moisturizer", 2);
console.log(skin1004);
