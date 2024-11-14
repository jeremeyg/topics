function rollDice() {
  const numOfDice = parseInt(document.getElementById("numOfDice").value, 10);
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");

  const values = [];
  const images = []; // Fixed typo here

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="png/${value}.png" alt="Dice face ${value}">`);
  }

  diceResult.textContent = `Dice: ${values.join(", ")}`;
  diceImages.innerHTML = images.join(""); // Fixed the assignment to innerHTML
}
