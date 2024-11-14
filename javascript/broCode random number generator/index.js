const myLabel = document.getElementById("myLabel");
const myNumber = document.getElementById("myNumber");
const myName = document.getElementById("myName");
const myButton = document.getElementById("myButton");
const resultElement = document.getElementById("resultElement");

myButton.onclick = function () {
  // Get the age value from myNumber and convert it to a number
  const name = myName.value;
  const age = parseInt(myNumber.value, 10);

  // Check if the age is a valid number
  if (isNaN(age)) {
    resultElement.textContent = `${name} Please enter a valid age.`;
  } else if (age <= 12) {
    resultElement.textContent = `${name} Hi there buddy!`;
  } else if (age < 18) {
    resultElement.textContent = `${name}  Hi there teenagers!`;
  } else if (age == 18) {
    resultElement.textContent = `${name} Happy debutant!`;
  } else if (age > 18) {
    resultElement.textContent = `${name} You're doing fine. Go find happiness.`;
  }

  // Update the label with the value from myName
  myLabel.textContent = myName.value;
};
