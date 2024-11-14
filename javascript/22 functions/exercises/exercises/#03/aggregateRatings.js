const reviews = [{ rating: 5 }, { rating: 4 }, { rating: 3 }, { rating: 5 }];

//calculate the average

const sum = reviews.reduce((acc, curr) => {
  return acc + curr.rating;
}, 0);

const average = sum / reviews.length;

console.log(average);
