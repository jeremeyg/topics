const scores = {
    math: 90,
    science: 85,
    english: 78
};

const subjects = ["math", "science", "english"];

for (let subject of subjects) {
    console.log(`${subject}: ${scores[subject]}`);
}

const ouput = subjects.map(subject => `${subject}: ${scores[subject]}`).join(",");
console.log(ouput);
