//destructure in function parameters

function displayPerson({ firstName, lastName, age, job }) {
  console.log(firstName);
  console.log(age);
  console.log(job);
}

const person1 = {
  firstName: " Spongebob",
  age: 30,
  job: "fry cook",
};

const person2 = {
  firstName: "Patrick",
  age: 27,
};

displayPerson(person1);
