let searchBoxInput = document.querySelector(".searchBox");
let locationResult = document.querySelector(".location");
let form = document.querySelector("form");

form.addEventListener("submit", searchCity);

function searchCity(event) {
  event.preventDefault();
  let inputValue = searchBoxInput.value;
  if (inputValue) {
    locationResult.textContent = inputValue;
    showPosition();
  }
}

function showPosition() {
  let apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${searchBoxInput.value}&units=metric&appid=5f472b7acba333cd8a035ea85a0d4d4c`;
  axios.get(apiUrl).then(showWeather);
}

function showWeather(response) {
  let lon = response.data[0].lon;
  let lat = response.data[0].lat;
  let apiUrlSecond = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=5f472b7acba333cd8a035ea85a0d4d4c`;
  axios.get(apiUrlSecond).then(applyWeather);
}

function applyWeather(response) {
  console.log(response);

  let cityname = response.data.name;
  let citymainname = document.querySelector(".location");

  let temp = Math.round(response.data.main.temp);
  let temprach = document.querySelector(".number");

  let weathermood = response.data.weather[0].main;
  let weathermainmood = document.querySelector(".weathermoods");

  let currenthumidity =  Math.round(response.data.main.humidity);
  let detailing = document.querySelector(".humidity");

  let speed =  Math.round(response.data.wind.speed);
  let windspeed = document.querySelector(".wind");

  let img = document.querySelector(".icon-img");
  let iconInfo = response.data.weather[0].icon ;
  let imgUrl = `https://openweathermap.org/img/wn/${iconInfo}@2x.png`;

  img.src = imgUrl;
  citymainname.innerHTML = cityname;
  weathermainmood.innerHTML = weathermood;
  temprach.innerHTML = temp;
  detailing.innerHTML = `Humidity: ${currenthumidity}%`;
  windspeed.innerHTML = `Wind speed: ${speed} km/h`;
}

let now = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let currentMonth = months[now.getMonth()];
let currentDay = days[now.getDay()];
let currentDate = now.getDate();
let currentHour = ("0" + now.getHours()).slice(-2);
let currentMinute = ("0" + now.getMinutes()).slice(-2);

let dateElement = document.querySelector(".date");
dateElement.textContent = `${currentDay}, ${currentMonth} ${currentDate}`;
let dayAfterFullDayIndex1 = (now.getDay() + 1) % 7; // Get the index of the day after fullDay
let dayAfterFullDay1 = days[dayAfterFullDayIndex1];
let day11 = document.querySelector("#day1");
day11.textContent = dayAfterFullDay1;
let dayAfterFullDayIndex2 = (now.getDay() + 2) % 7; // Get the index of the day after fullDay
let dayAfterFullDay2 = days[dayAfterFullDayIndex2];
let day22 = document.querySelector("#day2");
day22.textContent = dayAfterFullDay2;
let dayAfterFullDayIndex3 = (now.getDay() + 3) % 7; // Get the index of the day after fullDay
let dayAfterFullDay3 = days[dayAfterFullDayIndex3];
let day33 = document.querySelector("#day3");
day33.textContent = dayAfterFullDay3;
let dayAfterFullDayIndex4 = (now.getDay() + 4) % 7; // Get the index of the day after fullDay
let dayAfterFullDay4 = days[dayAfterFullDayIndex4];
let day44 = document.querySelector("#day4");
day44.textContent = dayAfterFullDay4;
let dayAfterFullDayIndex5 = (now.getDay() + 5) % 7; // Get the index of the day after fullDay
let dayAfterFullDay5 = days[dayAfterFullDayIndex5];
let day55 = document.querySelector("#day5");
day55.textContent = dayAfterFullDay5;

function changer(event) {

  let tempValue = parseFloat(temprach.innerHTML);
  let fahrenheitValue = (tempValue * 9) / 5 + 32;
  fahrenheitValue = Math.round(fahrenheitValue);
  temprach.innerHTML = fahrenheitValue;
  details.innerHTML = "°F | °C";
}

function rechanger(event) {
  let tempValue = parseFloat(temprach.innerHTML);
  let celsiusValue = ((tempValue - 32) * 5) / 9;
  celsiusValue = Math.round(celsiusValue);
  temprach.innerHTML = celsiusValue;
}

let details = document.querySelector(".riz");

let temprach = document.querySelector(".number");
let fahrenheit = document.querySelector(".fahrenheit");
fahrenheit.addEventListener("click", changer);

let celsius = document.querySelector(".celsius");
celsius.addEventListener("click", rechanger);