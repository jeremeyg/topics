const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function paginate(items, pageSize, pageNumber) {
  // Return the items for the specified page
  const start = (pageNumber - 1) * pageSize;
}

// Example: paginate(items, 3, 2) should return [4, 5, 6]

const pages = paginate(items, 3, 2);
console.log(pages);
