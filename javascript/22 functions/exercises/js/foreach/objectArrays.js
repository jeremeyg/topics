const foodCategories = {
  fruits: ["apple", "banana", "orange"],
  vegetables: ["carrot", "broccoli", "spinach"],
};

Object.entries(foodCategories).forEach(([category, items]) => {
  console.log(`${category.toUpperCase()}:`);
  items.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
});
