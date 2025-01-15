function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = searchInputElement.value;
}
let cityElement = document.querySelector("#search-form");
cityElement.addEventListener("submit", search);
