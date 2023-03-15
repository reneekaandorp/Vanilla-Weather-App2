function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  console.log(response);
}

let apiKey = "79t19ca06b3618febf143dc04f0o86be";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Lisbon&key=79t19ca06b3618febf143dc04f0o86be&units=metric";

axios.get(apiUrl).then(displayTemperature);
