console.log("Build Successful");

import { parseWeekday, epochToHour } from "./utils";

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const NEWS_API_KEY = process.env.NEWS_API_KEY;
const reverse = require("reverse-geocode");

const todayContainer = document.getElementById("weatherToday");
const forecastContainer = document.getElementById("threeDayForecast");
const hourlyTable = document.getElementById("hourlyTable");
const weatherNotices = document.getElementById("weatherNotices");
const locationText = document.getElementById("userLocation");
const searchInput = document.getElementById("search");
const searchSubmitBtn = document.getElementById("searchSubmit");
const trendingNews = document.getElementById("trendingNews");

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
  getTopNews();
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

  locationText.innerText = `Home Location: Undefined`;
};

searchSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  citySearch();
});

async function citySearch() {
  let searchVal = searchInput.value;
  todayContainer.innerText = "";
  forecastContainer.innerText = "";
  hourlyTable.innerText = "";
  try {
    await getWeatherToday(searchVal);
    await getThreeDayForecast(searchVal);
    await getHourlyForecast(searchVal);
  } catch (error) {
    window.alert("Invalid search, please try again.");
  }
}

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
  temperatureTd.innerText = Math.trunc(hourlyData.temp_f) + " \u00B0F";
  let rainChanceTd = document.createElement("td");
  rainChanceTd.innerText = hourlyData.chance_of_rain;

  tableTr.append(timeTd, conditionTd, temperatureTd, rainChanceTd);
  hourlyTable.appendChild(tableTr);
}

function generateNewsStories(newsData) {
  let storyCard = document.createElement("div");
  storyCard.classList.add("storyCard");
  let sourceName = document.createElement("h3");
  sourceName.innerText = `${newsData.source.name}`;
  let storyTitle = document.createElement("h4");
  storyTitle.innerText = `${newsData.title}`;
  let storyURL = document.createElement("a");
  storyURL.innerText = `${newsData.url}`;
  storyURL.href = `${newsData.url}`;
  storyURL.target = `/blank`;

  storyCard.append(sourceName, storyTitle, storyURL);

  trendingNews.appendChild(storyCard);
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

  for (let i = 7; i < target.hour.length; i++) {
    generateHourlyForecastCards(target.hour[i]);
  }
}

async function getTopNews() {
  const request = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`
  );

  const data = await request.json();

  for (let i = 0; i < 5; i++) {
    generateNewsStories(data.articles[i]);
  }
}

init();
