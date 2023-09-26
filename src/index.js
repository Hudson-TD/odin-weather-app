console.log("Build Successful");

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

let test = document.getElementById("today");

async function getWeatherToday() {
  const request = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=atlanta`
  );
  const data = await request.json();

  console.log(data);
}

getWeatherToday();
