console.log("Build Successful");

import { parseWeekday, epochToHour } from "./utils";

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const reverse = require("reverse-geocode");

const todayContainer = document.getElementById("weatherToday");
const forecastContainer = document.getElementById("threeDayForecast");
const hourlyTable = document.getElementById("hourlyTable");
const weatherNotices = document.getElementById("weatherNotices");
const locationText = document.getElementById("userLocation");

function init() {
  getLocation();
}

async function getLocation() {
  await navigator.geolocation.getCurrentPosition(successCb, errorCb);
}

const successCb = (position) => {
  console.log(position);
  let x = position.coords.latitude;
  let y = position.coords.longitude;

  const parsedLocation = reverse.lookup(x, y, "us");
  let userHomeLocation = parsedLocation;

  locationText.innerText = `Home Location: ${userHomeLocation.city}, ${userHomeLocation.state}`;
  getWeatherToday(userHomeLocation.city);
  getThreeDayForecast(userHomeLocation.city);
  getHourlyForecast(userHomeLocation.city);
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
  window.alert(
    "Home location could not be distinguished, please set this manually for the best experience!"
  );
};

function generateWeatherCard(weatherData) {
  let location = document.createElement("h3");
  location.innerText = `${weatherData.location.name}, ${weatherData.location.region}`;
  let weekdayText = document.createElement("p");
  weekdayText.innerText = parseWeekday(weatherData.current.is_day);
  let lastUpdate = document.createElement("p");
  lastUpdate.innerText = `${weatherData.current.last_updated}`;
  let conditionImg = document.createElement("img");
  conditionImg.src = `${weatherData.current.condition.icon}`;
  let conditionText = document.createElement("p");
  conditionText.innerText = `${weatherData.current.condition.text}`;
  let tempF = document.createElement("p");
  tempF.innerText = `Feels like: ${weatherData.current.feelslike_f} \u00B0F`;
  let humidity = document.createElement("p");
  humidity.innerText = `Humidity: ${weatherData.current.humidity} %`;

  todayContainer.append(
    location,
    weekdayText,
    lastUpdate,
    conditionText,
    conditionImg,
    tempF,
    humidity
  );
}

function generateForecastCards(forecastData) {
  let card = document.createElement("div");
  let date = document.createElement("p");
  date.innerText = `${forecastData.date}`;
  let sunrise = document.createElement("p");
  sunrise.innerText = `Sunrise: ${forecastData.astro.sunrise}`;
  let sunset = document.createElement("p");
  sunset.innerText = `Sunset: ${forecastData.astro.sunset}`;
  let dailyConditionImg = document.createElement("img");
  dailyConditionImg.src = `${forecastData.day.condition.icon}`;
  let maxtemp = document.createElement("p");
  maxtemp.innerText = `High: ${forecastData.day.maxtemp_f} \u00B0F`;
  let minTemp = document.createElement("p");
  minTemp.innerText = `Low: ${forecastData.day.mintemp_f} \u00B0F`;
  //   let uvIndex = document.createElement("p");
  //   uvIndex.innerText = `${forecastData.day.uv}`;

  card.classList.add("forecast-card");

  card.append(date, sunrise, sunset, dailyConditionImg, maxtemp, minTemp);

  forecastContainer.appendChild(card);
}

function generateHourlyForecastCards(hourlyData) {
  let tableTr = document.createElement("tr");
  let timeTd = document.createElement("td");
  timeTd.innerText = hourlyData.time;
  let conditionTd = document.createElement("td");
  conditionTd.innerText = hourlyData.condition.text;
  let temperatureTd = document.createElement("td");
  temperatureTd.innerText = Math.trunc(hourlyData.temp_f);
  let rainChanceTd = document.createElement("td");
  rainChanceTd.innerText = hourlyData.chance_of_rain;

  tableTr.append(timeTd, conditionTd, temperatureTd, rainChanceTd);
  hourlyTable.appendChild(tableTr);
}

// async function getHighlightsToday(city) {
//   const request = await fetch(
//     `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}`
//   );
//   const data = await request.json();
// }

async function getWeatherToday(city) {
  const request = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}`
  );
  const data = await request.json();

  //console.log(data);
  generateWeatherCard(data);
}

async function getThreeDayForecast(city) {
  const request = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=3`
  );
  const data = await request.json();
  let target = data.forecast.forecastday;

  for (let i = 0; i < target.length; i++) {
    generateForecastCards(target[i]);
  }
}

async function getHourlyForecast(city) {
  const request = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${city}`
  );
  const data = await request.json();
  let target = data.forecast.forecastday[0];

  for (let i = 0; i < target.hour.length; i++) {
    generateHourlyForecastCards(target.hour[i]);
  }
}

init();
