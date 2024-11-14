const user = {
  id: 1,
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "Anytown",
  },
};

const user1 = structuredClone(user);
console.log(user1);
