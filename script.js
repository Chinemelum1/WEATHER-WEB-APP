let dark = document.querySelector(".dark");
dark.addEventListener("click", function () {
  document.body.style.backgroundColor = "#0B111D";
  document.querySelector(".sidepanel").style.backgroundColor = "#202C3C";
  document.querySelector(".air").style.backgroundColor = "#202C3C";
  document.querySelector(".forcast").style.backgroundColor = "#202C3C";
  document.querySelector(".nav").style.backgroundColor = "#202C3C";
  document.querySelector(".searchbar").style.backgroundColor = "#202C3C";
  document.querySelector(".map").style.backgroundColor = "#202C3C";
  document.querySelector(".search").style.backgroundColor = "#202C3C";
  document.body.style.color = "white";
});

const apiKey = "a9bcc3177f53c677d09b282d6b8df67c";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const inputField = document.querySelector(".search");
const searchBtn = document.querySelector(".purrr");
const weatherIcon = document.querySelector(".weather-icon");
const error = document.querySelector(".error-message");
console.log(weatherIcon);

async function getWeather(city) {
  const res = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (res.status == 404) {
    document.getElementById("city").innerHTML = error.style.display = "block";
  }
  var data = await res.json();

  document.getElementById("city").innerHTML = data.name;
  document.getElementById("text").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".once").innerHTML = data.wind.speed;

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "./Assets/Images/sunand cloud.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "./Assets/Images/sunshine.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "./Assets/Images/Rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "Assets/Images/drizzle murder fucker - Copy.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "Assets/Images/misty bitch.png";
  }
}

searchBtn.addEventListener("click", function () {
  getWeather(inputField.value);
});
