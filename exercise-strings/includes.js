// const emailList = ["ma@mail.com", "jrimee@mail.com", "jeremyeg@mail.com"];
// const email = "mamail.com";
// const findEmail = emailList.find(item => item === email);

// function checkEmail(email) {
//     if (email.includes("@")) {
//         if (findEmail) {
//             console.log("Email found!");
//         }
//     } else {
//         console.log("Please provide @mail.com");
//     }
// }

// checkEmail(email);

// const browserType = "mozilla";
// console.log(browserType);
// console.log(browserType.slice(1, 4));
// console.log(browserType.slice(4));
// console.log(browserType.replace("moz", "gor"));
// console.log(browserType.replaceAll("l", "kk"));
// console.log(browserType);
// console.log();

const cityLisdiv = document.querySelector(".city-list ul");
cityLisdiv.textContent = "";

const output = document.querySelector(".output ul");
output.textContent = "";
const cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];

for (const city of cities) {
    //const firstLetter = city.slice(0, 1);
    const lower = city.toLowerCase();
    // const capitalized = lower.replace(firstLetter, firstLetter.toUpperCase());
    const capitalized = lower.charAt(0).toUpperCase() + lower.slice(1);
    const outputList = document.createElement("li");
    outputList.textContent = capitalized;
    output.appendChild(outputList);

    const cityList = document.createElement("li");
    cityList.textContent = city;
    cityLisdiv.appendChild(cityList);
}
