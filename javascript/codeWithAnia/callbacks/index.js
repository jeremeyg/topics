const button = document.querySelector("button");

function toggler() {
    button.classList.toggle("altColor");
}

// toggle();

button.addEventListener("click", toggler);

/*
button.addEventListener("click", () => {
  button.classList.toggle("altColor");
});
*/

function firstAction() {
    console.log(`First Action`);
    setTimeout(secondAction, 2000);
}

function secondAction() {
    console.log(`Second Action`);
}

setTimeout(firstAction, 5000);
