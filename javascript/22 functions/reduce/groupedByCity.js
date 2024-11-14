const people = [
  { name: "Alice", city: "New York" },
  { name: "Bob", city: "Los Angeles" },
  { name: "Charlie", city: "New York" },
  { name: "David", city: "Chicago" },
  { name: "Eve", city: "Los Angeles" },
];

const peopleByCity = people.reduce((acc, curr) => {
  const city = curr.city; //new york
  if (!acc[city]) {
    //if exist else and push(curr value)
    //acc[new york]
    acc[city] = []; // if acc[new york] doesnt exist = undefined
  } else {
    acc[city].push(curr); //acc new york :{ name: david, city: new york}
    return acc;
  }
}, {});
console.log(groupedByCity);
