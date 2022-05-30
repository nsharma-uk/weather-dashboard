//API key

const API_KEY = "ef38ee1c920fe9c4acd96f8dd551173a";

//GLOBAL FUNCTIONS

//declare recent searches container variable -
const recentSearchesContainer = $("recent-searches-container");


//UTILITIES FUNCTIONS

//extract info from local storage (get)
const readFromLocalStorage = (key, defaultValue) => {
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

//function to render recent city search
const renderRecentSearches =()=> {
  //get recent searches from LS
  const recentSearches = readFromLocalStorage("recentSearches", []);
  
  //if recent search has a populated recent search history, render those recent cities
  if (recentSearches.length) {

    const createRecentCity = (city) => {
      return `<li
        class="list-group-item border-top-0 border-end-0 border-start-0"
        data-city="${city}"
      >
        ${city}
      </li>`;
    };

    const recentCities = recentSearches.map(createRecentCity).join("");

console.log (recentCities);
    // if recent cities search exists, render recent searches list
    const ul = `<ul class="list-group rounded-0">
      ${recentCities}
    </ul>`;
 
      // then append to parent
      recentSearchesContainer.append(ul);
    
    // else, empty show alert
  } else {
      const alert = `<div class="alert alert-warning" role="alert">
    You have no recent searches!
  </div>`;

 // append to parent
 recentSearchesContainer.append(alert);
  }
};

const handleRecentSearchClick = async (event) => {
  const target = $(event.target);

  // restrict clicks only from li
  if (target.is("li")) {
    console.log ("search")
    // get data city attribute
    const cityName = target.attr("data-city");

    await renderWeatherInfo(cityName);
  }
};


const onReady = () => {
renderRecentSearches ();
  
};

recentSearchesContainer.click(handleRecentSearchClick);
$(document).ready(onReady);
