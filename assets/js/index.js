//API key

const API_KEY = "ef38ee1c920fe9c4acd96f8dd551173a";

//UTILITIES FUNCTIONS

//extract info from local storage (get)
const getFromLocalStorage = (key, defaultValue) => {
  const parsedData = JSON.parse(localStorage.getItem(key));
  return parsedData ? parsedData : defaultValue;
};

//write info into local storage (set)
const writeToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

//empty local storage (clear)
const clearLS = () => {
  localStorage.clear();
};

const renderCities = () => {
  // get recent cities from LS []
  // if [] is empty then render alert
  // else render all recent cities
  // add an event listener on div containing all cities
};

const renderCurrentWeather = (currentWeatherData) => {
  // render the current weather data and append to section
};

const renderForecastWeather = (forecastWeatherData) => {
  // render the forecast weather data and append each card to section
};

const renderWeatherData = (cityName) => {
  // use API to fetch current weather data
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

  // from the response cherry pick all the data you want to see in the current weather card

  // get the lat and lon from current weather data API response
  const forecastWeatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&units=metric&appid=${API_KEY}`;

  // render current weather data

  // render forecast weather data
};

const handleFormSubmit = () => {
  // get the city name from input
  // if city name is empty handle that
  // else render weather data
};

const onReady = () => {
  //render search history by targeting parent div
  const recentSearchesContainer = $("recent-searches-container");

  //get recent searches from LS
  const recentSearches = readFromLocalStorage("recentSearches", []);

  if (recentSearches.length) {
    //if recent search has cities, render recent cities
    // else, empty show alert
  } else {
    const alert = `<div class="alert alert-warning" role="alert">
  You have no recent searches!
</div>`;
  }
};

$(document).ready(onReady);
