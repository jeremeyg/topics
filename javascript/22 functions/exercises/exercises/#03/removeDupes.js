const tags = ["JavaScript", "HTML", "CSS", "JavaScript", "CSS"];
const noDupe = tags.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(noDupe);
