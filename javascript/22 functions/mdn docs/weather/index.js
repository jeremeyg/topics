const select = document.querySelector("select");
const para = document.querySelector("p");


select.addEventListener('change', setWeather)

function setWeather(){
    const choice = select.value;
    if (choice === "rainy") {
        para.textContent = "Rainy today";
      } else if (choice === "sunny") {
        para.textContent = "Sunny today";
      } else if (choice === "snowing") {
        para.textContent === "Snowwing today";
      } else if (choice === "overcast") {
        para.textContent === "Overcast today";
      } else {
        para.textContent = "";
      }
}
