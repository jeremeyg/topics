const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: true },
];

// Filter active users
const activeUsers = users.filter((user) => user.active);

// The reduce step is not necessary in this case,
// as filter already provides the desired result.
console.log(activeUsers);
