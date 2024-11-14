const users1 = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];
const users2 = [
  { id: 3, name: "Bob Johnson" },
  { id: 4, name: "Alice Davis" },
];

const allUsers = [...users1, ...users2];
const data = Object.fromEntries(allUsers.map((user) => [user.id, user]));

console.log(data);

const merge = [...users1, ...users2].reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});

console.log(merge);
