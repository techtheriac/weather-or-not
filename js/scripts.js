const main = document.getElementById("main");
const header = document.getElementById("header");
const button = document.querySelector(".look-up-btn");
const search = document.getElementById("look-up-input");

//Fetches data from API
button.addEventListener("click", requestData);

function requestData($event) {
  let chosenCity = search.value;

  $event.preventDefault();

  let request = fetch(
    "http://api.weatherstack.com/current?access_key=8c4ee78af314bbf47f2f1f9ed4e4874f&query= " +
      chosenCity
  );

  request
    .then(response => response.json())
    .then(response => (obj = response))
    .then(() => {
      console.log(obj);
    })
    .catch(error => console.error(error));
}

//Map Config
