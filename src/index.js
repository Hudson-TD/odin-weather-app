console.log("Build Successful");

import parseWeekday from "./utils";

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const reverse = require("reverse-geocode");

const todayContainer = document.getElementById("weatherToday");
const locationText = document.getElementById("userLocation");

function init() {
  getLocation();
}

async function getLocation() {
  const userLocation = await navigator.geolocation.getCurrentPosition(
    successCb,
    errorCb
  );
}

const successCb = (position) => {
  console.log(position);
  let x = position.coords.latitude;
  let y = position.coords.longitude;

  const parsedLocation = reverse.lookup(x, y, "us");

  locationText.innerText = `Home Location: ${parsedLocation.city}, ${parsedLocation.state}`;
  getWeatherToday(parsedLocation.city);
};

const errorCb = (error) => {
  let errorMessage = "Unknown error";
  switch (error.code) {
    case 1:
      errorMessage = "Permission denied";
      break;
    case 2:
      errorMessage = "Position unavailable";
      break;
    case 3:
      errorMessage = "Timeout";
      break;
  }

  console.log(errorMessage);
};

function generateWeatherCard(weatherData) {
  let location = document.createElement("h3");
  location.innerText = `${weatherData.location.name}, ${weatherData.location.region}`;
  let lastUpdate = document.createElement("p");
  lastUpdate.innerText = `${weatherData.current.last_updated}`;
  let weekdayText = document.createElement("p");
  weekdayText.innerText = parseWeekday(weatherData.current.is_day);
  let conditionImg = document.createElement("img");
  conditionImg.src = `${weatherData.current.condition.icon}`;
  let conditionText = document.createElement("p");
  conditionText.innerText = `${weatherData.current.condition.text}`;
  let tempF = document.createElement("p");
  tempF.innerText = `${weatherData.current.feelslike_f} \u00B0F`;
  let humidity = document.createElement("p");
  humidity.innerText = `${weatherData.current.humidity} %`;

  todayContainer.append(
    location,
    lastUpdate,
    weekdayText,
    conditionText,
    conditionImg,
    tempF,
    humidity
  );
}

async function getWeatherToday(city) {
  const request = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}`
  );
  const data = await request.json();

  //console.log(data);
  generateWeatherCard(data);
}

async function getThreeDayForecast() {
  const request = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=atlanta&days=3`
  );
  const data = await request.json();

  console.log(data);
}

init();
