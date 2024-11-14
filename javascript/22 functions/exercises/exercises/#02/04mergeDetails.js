const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const addresses = [
  { id: 1, address: "123 Main St" },
  { id: 2, address: "456 Oak St" },
];

//[{ id: 1, name: "Alice", address: "123 Main St" },{ id: 2, name: "Bob", address: "456 Oak St" },];

const conData = users.concat(addresses).flat();
console.log(conData);

const usersData = conData.reduce((acc, curr) => {
  if (!acc[curr.id]) {
    //check if naa ang id
    acc[curr.id] = { ...curr }; // if wala, add it mao na ni ang accumulator
  } else {
    //if naa na
    acc[curr.id] = { ...acc[curr.id], ...curr }; //merge ang same og id
  }
  return acc;
}, {});
