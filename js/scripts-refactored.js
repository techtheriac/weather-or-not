const button = document.querySelector(".search-button");
const search = document.querySelector(".search-bar");

//Fetches data from API
button.addEventListener("click", requestData);

function requestData($event) {
  $event.preventDefault();
  const chosenCity = search.value;
  const requestUrl =
    "http://api.weatherstack.com/current?access_key=8c4ee78af314bbf47f2f1f9ed4e4874f&query=" +
    chosenCity;

  async function fetchData() {
    let response = await fetch(requestUrl);
    let responseObject = await response.json();
    return responseObject;
  }

  //Modify DOM Asynchronously
  fetchData().then(responseObject => {
    console.log(responseObject);
  });
}
