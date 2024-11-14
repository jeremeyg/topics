//sort() = method used to sort elements of an array
//sorts elements as string in lexicographic order, not alphabetical
// =alphabet + numbers + symbols

let fruits = ["apple", "orange", "banana"];

fruits.sort();

console.log(fruits);

let nums = [2, 5, 3, 6, 8, 22];
nums.sort((a, b) => a - b);
console.log(nums);