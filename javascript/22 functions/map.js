/*
.map = accepts callback and applies that function
 to each element of an array,
then return a new array
*/

const bands = ["franco", "urbandub"];

// Use map to create a new array of messages
const bandMessages = bands.map((band, index) => {
  return `The band ${band} is at index ${index}`;
});

// Log the new array of messages
console.log(bandMessages);

/*broCode */
const dates = ["2024-1-10", "2022-11-22", "2020-12-10"];
const formattedDates = dates.map(formatDates);
function formatDates(element) {
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

console.log(formattedDates);

const newFormat = dates.map((date) => {
  const parts = date.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
});

console.log(newFormat);
