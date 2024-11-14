obj1 = [1, 2, 3, 4, 5, 6];
obj1.forEach((element, index) => {
  console.log(`element: ${element}, index: ${index}`);
});

obj2 = {
  1: "one",
  2: "two",
};

Object.entries(obj2).forEach(([key, value]) => {
  console.log(`key :${key}, value: ${value}`);
});

console.log(`Object.entries ${Object.entries(obj2)}`);
