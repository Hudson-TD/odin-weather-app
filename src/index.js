console.log("Build Successful");

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

const todayContainer = document.getElementById("today");

function parseWeekday(value) {
  switch (value) {
    case 0:
      return "Monday";
      break;
    case 1:
      return "Tuesday";
      break;
    case 2:
      return "Wednesday";
      break;
    case 3:
      return "Thursday";
      break;
    case 4:
      return "Friday";
      break;
    case 5:
      return "Saturday";
      break;
    case 6:
      return "Sunday";
      break;
    default:
      break;
  }
}

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

async function getWeatherToday() {
  const request = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=atlanta`
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

//getWeatherToday();
getThreeDayForecast();
