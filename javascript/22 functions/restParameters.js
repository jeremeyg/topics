/*rest parameters allows a function work with a variation number of arguments by bunding
them into an array
rest = bundles
spread = expands 

gpt =  rest parameters are a useful feature that allows functions to accept an indefinite number of arguments as an array
= in scenarios where you don't know beforehand how many arguments a function might receive*/

function openFridge(...foods) {
  console.log(...foods);
}

function greet(greeting, ...names) {
  names.forEach((name) => console.log(`${greeting}, ${name}`));
}

greet("Hello", "Alice", "Beyonce", "Michelle");

function logMessages(message, ...messages) {
  console.log(message);
  messages.forEach((msg) => console.log(msg));
}
logMessages("Unswa ako gipangingon?", "Oo", "Dili uy", "Ang unsa");

function sumNum(...numbers) {
  /*/if result variable does not have assined value, 
    its default value is undefined thus if attempt to perform
    arithmetic operations with undefined,
    its result become Nan /*/
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

const total = sumNum(2, 4, 8, 6, 9);
console.log(total);

function getAverage(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result / numbers.length;
}

const average = getAverage(5, 5, 10, 15, 10, 5);
console.log(average);

/*to combine strings */

function combineStrings(...strings) {
  return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants");
console.log(fullName);
