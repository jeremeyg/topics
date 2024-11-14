let fruits = ["apple", "banana", "grapes", "watermelo"];

fruits.forEach(lowercase);
function lowercase(element, index, array) {
  array[index] = element.toLowerCase();
}

`console.log(fruits);
`;
