const myNumber = document.getElementById("myNumber");
const elementResult = document.getElementById("elementResult");
const mySubmit = document.getElementById("mySubmit");
const myReset = document.getElementById("myReset");

const max = 100;
const min = 0;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
let guessesRemaining = 3;

mySubmit.onclick = function () {
  let yourGuess = Number(myNumber.value);

  // Check if the input is valid
  if (isNaN(yourGuess)) {
    elementResult.textContent = "Please enter a valid number.";
  } else if (guessesRemaining > 0) {
    if (randomNum > yourGuess) {
      elementResult.textContent = "Too Low Guess";
      guessesRemaining--;
    } else if (randomNum < yourGuess) {
      elementResult.textContent = "Too High Guess";
      guessesRemaining--;
    } else {
      elementResult.textContent = "You won!";
      // Optionally reset the game
      resetGame();
      return;
    }

    if (guessesRemaining === 0) {
      elementResult.textContent = `Game Over! The number was ${randomNum}.`;
      // Optionally reset the game
      resetGame();
    } else {
      elementResult.textContent += ` Remaining guesses: ${guessesRemaining}`;
    }
  } else {
    elementResult.textContent =
      "No guesses left. Please refresh the page to play again.";
  }
};

myReset.onclick = function resetGame() {
  randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  guessesRemaining = 3;
  myNumber.value = ""; // Clear the input field
  elementResult.textContent = "";
};
