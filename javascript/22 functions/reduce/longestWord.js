const words = ["apple", "banana", "cherry", "blueberry", "strawberry"];
// Result should be: "strawberry"

const longest = words.reduce((acc, curr) => {
  if (curr.length > acc.length) {
    return curr;
  }
  return acc;
}, "");

console.log(longest);
