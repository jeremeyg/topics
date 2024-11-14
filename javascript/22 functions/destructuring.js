let grocery = ["milk", "coffee", "milo", "bread"];

// array destructuring into variables, so now we
//can work with variables instead of array numbers
let [mil, cof, , bd] = grocery;

console.log(mil); // milk
console.log(bd); //it skipped milo instead of assigned bd to milo it will show bread

//it means destructurizing by copying items into variables /
// or shorter way to write

//unwanted elements can be thrown away via extra comma

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  let maxSalary = 0;
  let maxName = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName;
}

const topName = topSalary();
console.log(topName);
