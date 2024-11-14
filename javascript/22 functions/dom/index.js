/*
DOM
 -document object model
 is a javascript page you see in a web browser
 and provides you with an API to interact with it.
Web browser constructs the DOM when it loads an HTML document,
and structures all the elements in a tree-like representation.
Javascript can access the DOM to dynamically
change the content, structure and style of a web page
*/
document.title = "My Website";

let username = "Jeremy";

const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? ` Guest` : username;

//element selectors
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

//
const fruits = document.getElementsByClassName("fruits");
console.log(fruits);
//first element
fruits[0].style.backgroundColor = "blue";
//html doest have metho to access the array we can type cast it to be able to use forEach methods

Array.from(fruits).forEach((fruit) => {
  fruit.style.backgroundColor = "yellow";
});

//tagName

const h4Elements = document.getElementsByTagName("h4");
console.log(h4Elements);

//single access for H4
//h4Elements[0].style.backgroundColor = "pink";

//multiple access using for OF
for (let h4Element of h4Elements) {
  h4Element.style.backgroundColor = "pink";
}

//access for unordered list
const liElements = document.getElementsByTagName("li");
for (let liElement of liElements) {
  liElement.style.backgroundColor = "lightgreen";
}

//querySelector - first matching element or null if doesnt have
const fruitfirst = document.querySelector("fruits");
fruitfirst.style.backgroundColor = "red ";
