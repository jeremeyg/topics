const temperatures = [72, 85, 93, 64, 78];

temperatures.forEach((temp) => {
  if (temp > 88) {
    console.log(`${temp} is hot!`);
  } else {
    console.log(`${temp} is cold!`);
  }
});
