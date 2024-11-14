const fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

//2 Array of objects
//Let’s say you have an array of objects, and you want to iterate through each object:

const cars = [
  { make: "Tesla", model: "Model 3" },
  { make: "Ford", model: "Mustang" },
  { make: "Chevrolet", model: "Camaro" },
];

cars.forEach((person) => {
  Object.entries(person).forEach(([key, value]) => {
    console.log(`key: ${key}, name: ${value}`);
  });
});

cars.forEach((car) => {
  const carDetails = Object.entries(car)
    .map(([key, value]) => `${key}, ${value}`)
    .join("");
});
