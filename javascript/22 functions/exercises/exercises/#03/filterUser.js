const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Bob Johnson" },
];

function filterUser(users, key) {
  return users.find((user) => user.name === key);
}

console.log(filterUser(users, "John Doe"));
