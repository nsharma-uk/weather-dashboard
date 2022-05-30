//API key

const API_KEY = "ef38ee1c920fe9c4acd96f8dd551173a";

//GLOBAL FUNCTIONS

//declare recent searches container variable -
const recentSearchesContainer = $("#recent-searches-container");
const searchForm = $("#search-form");
const weatherInfoContainer = $("#weather-info-container");

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

const renderCurrentData = (data) => {
  const currentWeatherCard = `<div class="today d-flex justify-content-between">
  <h2>City</h2>
  <div class="current-weather-card mx-auto d-flex flex-column align-items-center m-1"
>
  <h4 class="card-header w-100 text-center">Sunday, 29th May 2022</h4>
  <div class="card-body">
    <div class="card-condition d-flex flex-row justify-content-center">
     <div>
      <img class="weather-icon d-flex flex-row align-items-center mb-0" src=https://openweathermap.org/img/wn/${each.weatherIcon}.png alt="weather icon"/>
      </div>
      </div>
    <p class="card-text text-center">
      Temp : Temp <span>&#8451;</span>
    </p>
    <p class="card-text text-center">Humidity : 40%</p>
    <p class="card-text text-center">Wind : 35 MPH</p>
    <p class="card-text text-center">
    UV Index :
    <span class="uvIndex pl-3 pr-3"> High
</span>
    </p>
  </div>
</div>`;
weatherInfoContainer.append(currentWeatherCard);
};


// const renderCities = () => {
//   // get recent cities from LS []
//   // if [] is empty then render alert
//   // else render all recent cities
//   // add an event listener on div containing all cities
// };

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

//function to send city submitted to LS and render it in recent search section
const handleFormSubmit = async (event) => {
  event.preventDefault();

  // get form input value
  const cityName = $("#search-input").val();

  // validate
  if (cityName) {
    // render weather cards
    const renderStatus = await renderWeatherInfo(cityName);

    // get recentSearches from LS
    const recentSearches = readFromLocalStorage("recentSearches", []);

    if (!recentSearches.includes(cityName) && renderStatus) {
      // push city name to array
      recentSearches.push(cityName);

      // write recent searches to LS
      writeToLocalStorage("recentSearches", recentSearches);

      // remove previous items
      recentSearchesContainer.children().last().remove();

      // re-render recent cities
      renderRecentSearches();
    }
  }
};

//function to render recent city search
const renderRecentSearches = () => {
  //get recent searches from LS
  const recentSearches = readFromLocalStorage("recentSearches", []);

  //if recent search has a populated recent search history, render those recent cities
  if (recentSearches.length) {
    const createRecentCity = (city) => {
      return `<li
        class="list-group-item border-top-0 border-end-0 border-start-0"
        data-city="${city}">
        ${city}
      </li>`;
    };

    const recentCities = recentSearches.map(createRecentCity).join("");

    // if recent cities search exists, render recent searches list
    const ul = `<ul class="list-group rounded-0">${recentCities}</ul>`;

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

// const renderErrorAlert = () => {
//   // empty container
//   weatherInfoContainer.empty();

//   const alert = `<div class="alert alert-danger" role="alert">
//     Something went wrong!! Please try again.
//   </div>`;

//   weatherInfoContainer.append(alert);
// };

const renderWeatherInfo = async (cityName) => {
  const handleRecentSearchClick = async (event) => {
    const target = $(event.target);

    // restrict clicks only from li
    if (target.is("li")) {
      console.log("search");

      // get data city attribute
      const cityName = target.attr("data-city");

      await renderWeatherInfo(cityName);
    }
  };
};

const onReady = () => {
  renderRecentSearches();
};

recentSearchesContainer.click(handleRecentSearchClick);
searchForm.submit(handleFormSubmit);
$(document).ready(onReady);
