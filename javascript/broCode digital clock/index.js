function displayClock() {
  const now = new Date();
  let hours = now.getHours();
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const timeString = `${hours}: ${minutes}:${seconds}`;
  document.getElementById("clock").textContent = timeString;
}

displayClock();
setInterval(displayClock, 1000);
