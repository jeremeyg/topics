const cart = {
    blackpearl: {
        small: {
            quantity: 5,
            price: 49,
            fair: 20
        },
        medium: {
            quantity: 3,
            price: 79,
            fair: 30
        },
        grande: {
            quantity: 2,
            price: 99,
            fair: 40
        }
    }
};

function checkOut(cart, item, size, orderQuantity) {
    const itemData = cart[item];
    const itemSize = itemData[size];
    if (itemSize.quantity < orderQuantity) {
        console.log(`${item}with size ${size} does not have enough quantity`);

        return 0;
    } else {
        const totalCost = itemSize.price * orderQuantity + itemSize.fair;
        itemSize.quantity -= orderQuantity;
        console.log(`Your order of: ${item} with the size of ${size} has been placed. Total is: ${totalCost}`);
        return totalCost;
    }
}

const totalSmall = checkOut(cart, "blackpearl", "small", 2);
console.log(totalSmall);
