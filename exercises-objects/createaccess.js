const book = {
    title: "ikigai",
    author: "japanese",
    year: 2020
};

// const title = book[title];
console.log(book.title);

const car = {
    make: "toyota",
    model: "xforce",
    year: 2024
};

console.log(car);
car.color = "stone";
console.log(car);
delete car.year;

const person = {
    firstName: "kim",
    lastName: "chui",
    age: 34
};

for (let key in person) {
    console.log(`${key}:${person[key]}`);
}

const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    cast: {
        "Leonardo DiCaprio": "Cobb",
        "Joseph Gordon-Levitt": "Arthur",
        "Ellen Page": "Ariadne"
    }
};
console.log(movie.cast["Leonardo DiCaprio"]); // C
