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
  let apiUrlForecast = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=5b6f6f15a41430o43b1dff475td897aa`;
  let apiUrlSecond = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=5b6f6f15a41430o43b1dff475td897aa`;
  axios.get(apiUrlSecond).then(applyWeather);
  axios.get(apiUrlForecast).then(forecastTemp);
}

function applyWeather(response) {
  console.log(response);

  let cityname = response.data.city;
  let citymainname = document.querySelector(".location");

  let temp = Math.round(response.data.temperature.current);
  let temprach = document.querySelector(".number");

  let weathermood = response.data.condition.description;
  let weathermainmood = document.querySelector(".weathermoods");

  let currenthumidity =  Math.round(response.data.temperature.humidity);
  let detailing = document.querySelector(".humidity");

  let speed =  Math.round(response.data.wind.speed);
  let windspeed = document.querySelector(".wind");

  let img = document.querySelector(".icon-img");
  let iconInfo = response.data.condition.icon ;
  let imgUrl = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${iconInfo}.png`;

  img.src = imgUrl;
  citymainname.innerHTML = cityname;
  weathermainmood.innerHTML = weathermood.charAt(0).toUpperCase() + weathermood.slice(1);
  temprach.innerHTML = temp;
  detailing.innerHTML = `Humidity: ${currenthumidity}%`;
  windspeed.innerHTML = `Wind speed: ${speed} km/h`;
}

function forecastTemp(response) {
  console.log(response);

  let day1Temp = Math.round(response.data.daily[0].temperature.day);
  let day1TempElement = document.querySelector("#day1temp");
  let img1 = document.querySelector("#img1");
  let iconInfo1 = response.data.daily[0].condition.icon ;
  let img1Url = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${iconInfo1}.png`;

  let day2Temp = Math.round(response.data.daily[1].temperature.day);
  let day2TempElement = document.querySelector("#day2temp");
  let img2 = document.querySelector("#img2");
  let iconInfo2 = response.data.daily[1].condition.icon ;
  let img2Url = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${iconInfo2}.png`;

  let day3Temp = Math.round(response.data.daily[2].temperature.day);
  let day3TempElement = document.querySelector("#day3temp");
  let img3 = document.querySelector("#img3");
  let iconInfo3 = response.data.daily[2].condition.icon ;
  let img3Url = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${iconInfo3}.png`;

  let day4Temp = Math.round(response.data.daily[3].temperature.day);
  let day4TempElement = document.querySelector("#day4temp");
  let img4 = document.querySelector("#img4");
  let iconInfo4 = response.data.daily[3].condition.icon ;
  let img4Url = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${iconInfo4}.png`;

  let day5Temp = Math.round(response.data.daily[4].temperature.day);
  let day5TempElement = document.querySelector("#day5temp");
  let img5 = document.querySelector("#img5");
  let iconInfo5 = response.data.daily[4].condition.icon ;
  let img5Url = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${iconInfo5}.png`;

  day1TempElement.innerHTML = day1Temp;
  day2TempElement.innerHTML = day2Temp;
  day3TempElement.innerHTML = day3Temp;
  day4TempElement.innerHTML = day4Temp;
  day5TempElement.innerHTML = day5Temp; 
  img1.src = img1Url;
  img2.src = img2Url;
  img3.src = img3Url;
  img4.src = img4Url;
  img5.src = img5Url;
}

let apiCard1Url = `https://api.shecodes.io/weather/v1/current?query=Tehran&key=5b6f6f15a41430o43b1dff475td897aa`;
axios.get(apiCard1Url).then(applyWeather);

let apiCard2Url = `https://api.shecodes.io/weather/v1/forecast?query=Tehran&key=5b6f6f15a41430o43b1dff475td897aa`;
axios.get(apiCard2Url).then(forecastTemp);

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