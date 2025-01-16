function refreshWeather(response) {
  let currentTemp = document.querySelector("#current-temperature-value");
  currentTemp.innerHTML = Math.round(response.data.temperature.current);
  let currentHumidity = document.querySelector("#current-humidity");
  currentHumidity.innerHTML = `${Math.round(
    response.data.temperature.humidity
  )}%`;
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  let windElement = document.querySelector("#current-wind");
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
  let weatherElement = document.querySelector("#current-sky");
  weatherElement.innerHTML = response.data.condition.description;
  let date = new Date(response.data.time * 1000);
  let timeElement = document.querySelector("#time");
  timeElement.innerHTML = formatDate(date);
}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}
function searchCity(city) {
  let apiKey = "821b2a703ac1t98f96395477546f6ebo";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = searchInputElement.value;
  searchCity(searchInputElement.value);
}
let cityElement = document.querySelector("#search-form");
cityElement.addEventListener("submit", search);

searchCity("Tokyo");
