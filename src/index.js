function displayTemperature(response) {
let temp = document.querySelector("#temp");
let temperature = Math.round(response.data.temperature.current);
temp.innerHTML = `${temperature}`;

let cityElement = document.querySelector("#heading"); 
cityElement.innerHTML= response.data.city;

let conditionElement = document.querySelector("#condition");
conditionElement.innerHTML = response.data.condition.description;

let iconElement = document.querySelector("#icon");
iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon"/>`;

let humidityElement = document.querySelector("#humidity");
humidityElement.innerHTML = `${response.data.temperature.humidity}%`;

let windElement = document.querySelector("#wind");
windElement.innerHTML = `${response.data.wind.speed}km/h`;

let currentdisplay = document.querySelector("#paragraph");
let now = new Date(response.data.time * 1000);

currentdisplay.innerHTML = formatDate(now);

//getForecast(response.data.city);
}


function searchCity(event) {
 event.preventDefault();

 let searchcityElement = document.querySelector("#search-city");
 let city = searchcityElement.value;

 let apikey = "4932054o633942b306c5da4cf004ctf8";
 let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
}

let searchform = document.querySelector("#search-form");
searchform.addEventListener("submit", searchCity);


displayForecast();


function formatDate(currentdaytime) {
let days = ["Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
let day = days[currentdaytime.getDay()];

let months = [ "January", "February", "March", "April", "May","June", "July", "August", "September", "October", "November", "December"];
let month = months[currentdaytime.getMonth()];

let date = currentdaytime.getDate();
let hours = currentdaytime.getHours();
let minutes = currentdaytime.getMinutes();

if (hours < 10) {
    `0${hours}`;
}

if (minutes < 10) {
    `0${minutes}`;
}
let time = `${hours}:${minutes}`;

return `${day} ${date} ${month}, ${time}`;
}


function displayForecast (response) {
     
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let forecastHTML = "";
    
    days.forEach (function (day) {
        forecastHTML = forecastHTML + `<div class="weather-forecast-day">
        <div class="weather-forecast-date">${day}</div>
        <div><img src="rain-day.png" alt="weather image" width="50" class="weather-forecast-icon"></div>
        <div class="weather-forecast-temperature">
            <div class="weather-forecast-temp-max">
            Math.round ${day.temperature.maximum}°</div>
             <div class="weather-forecast-temp-min>
             Math.round ${day.temperature.minimum}°</div>
        </div>
        </div>`;
    });

let forecast = document.querySelector("#weather-forecast");  
forecast.innerHTML = forecastHTML;

}

//function getForecast(city) {
//let apikey = "4932054o633942b306c5da4cf004ctf8";
//let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apikey}&units=metric`;
//axios.get(apiUrl).then(displayForecast);
//}



