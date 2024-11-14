let cartItems = {
    item1: 2, // 2 units of item1
    item2: 1 // 1 unit of item2
};

const food_list = [
    { _id: "item1", price: 5 }, // item1 costs $5
    { _id: "item2", price: 10 }, // item2 costs $10
    { _id: "item3", price: 10 } // item2 costs $10
];

const getTotalPrice = () => {
    return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
        const itemInfo = food_list.find(food => food._id === itemId);
        return total + (itemInfo ? itemInfo.price * quantity : 0);
    }, 0);
};

const addToCart = (itemId, quantity) => {
    const itemInfo = food_list.find(food => food._id === itemId);
    if (!itemInfo) {
        console.log("Doest does not exist");
        return;
    }
    // if (cartItems[itemId]) {
    //     cartItems[itemId] += quantity;
    // } else cartItems[itemId] = quantity;

    cartItems = {
        ...cartItems,
        [itemId]: (cartItems[itemId] || 0) + quantity
    };
};

addToCart("item3", 4);
console.log(cartItems);
addToCart("item3", 4);
console.log(cartItems);
addToCart("items3", 4);
console.log(cartItems);

const cartItemList = { item1: 2, item2: 1 };
const itemId = "item1";
console.log(cartItemList[itemId] || 0); // Outputs: 2, because item1 exists with a value of 2
