const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const degree = document.querySelector(".degree");
const city = document.querySelector(".city-span");
const condition = document.querySelector(".weather-span");
const humidity = document.querySelector(".humidity-span");

btn.addEventListener("click", displayWeather);

function displayWeather() {
  if (input.value == "") {
    alert("Please Enter City Value.....");
  } else {
    function Getweather(weather) {
      degree.textContent = (weather.main.temp - 273.15).toFixed(1);
      city.textContent = input.value;
      condition.textContent = weather.weather[0].description;
      humidity.textContent = weather.main.humidity;
    }
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=08a4815c85cc11a493ab4fc6f7e58fc2`
  )
    .then((Response) => Response.json())
    .then((weather) => Getweather(weather));
}
