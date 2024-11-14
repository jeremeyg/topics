const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
];

function sortUsers(users, key) {
  // Sort users by the specified key
  return users.sort((a, b) => a[key] - b[key]);
}

// Example: sortUsers(users, "age") should return the array sorted by age

console.log(sortUsers(users, "age"));
