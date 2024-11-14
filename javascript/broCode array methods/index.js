const listBand = ["franco", "urbandub", "typecast"];
const listBand2 = listBand.map(myFunction);

document.getElementById("demo").innerHTML = listBand2;

function myFunction(value) {
  return value + "<br>" + value;
}

const numbers = [2, 4, 6, 88, 10];
const sum = numbers.reduce(mySum);

document.getElementById("total").innerHTML = sum;
function mySum(total, value, index, array) {
  return total + value;
}



