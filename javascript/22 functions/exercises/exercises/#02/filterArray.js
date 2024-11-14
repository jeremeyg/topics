const products = ["Milk", "Coffee", "Tea", "Juice", "Soda", "Songkarm"];

function sortByFirstLetter() {
  // Reduce to group products by their first letter
  const grouped = products.reduce((acc, product, index) => {
    const firstLetter = product[0].toUpperCase(); // Get the first letter of the product

    // Log the state before updating for this product
    console.log(`Step ${index + 1} - Before updating with '${product}':`, acc);

    if (!acc[firstLetter]) {
      acc[firstLetter] = []; // Create an empty array if it doesn't exist
    }
    acc[firstLetter].push(product); // Push the product into the array corresponding to its first letter

    // Log the state after updating for this product
    console.log(`Step ${index + 1} - After updating with '${product}':`, acc);

    return acc; // Return the accumulator for the next iteration
  }, {});

  // Log the grouped object before sorting
  console.log("Grouped before sorting:", grouped);

  // Sort the keys and build the sortedGrouped object
  const sortedGrouped = Object.keys(grouped) //sort keys
    .sort()
    .reduce((sortedArray, key) => {
      // turn to a single value or structure
      sortedArray[key] = grouped[key]; // Assign the sorted keys with their corresponding products
      return sortedArray; // Return the accumulator for the next iteration
    }, {});

  // Log the sorted object
  console.log("Sorted Grouped:", sortedGrouped);

  return sortedGrouped; // Return the final sorted object
}

// Run the function to see the output
console.log(sortByFirstLetter());
