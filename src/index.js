function displayTemperature(response) {
let temp = document.querySelector("#temp");
let temperature = Math.round(response.data.temperature.current);
temp.innerHTML = `${temperature}`;

let cityElement = document.querySelector("#heading");
let city = response.data.city;
cityElement.innerHTML= `${city}`;

}


function searchCity(event) {
 event.preventDefault();

 let searchcityElement = document.querySelector("#search-city");
 let heading = document.querySelector("#heading");
 heading.innerHTML= searchcityElement.value;

 let apikey = "4932054o633942b306c5da4cf004ctf8";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}`;
axios.get(apiUrl).then(displayTemperature);
}

let searchform = document.querySelector("#search-form");
searchform.addEventListener("Submit", searchCity);


function formatDate(daytime) {
let days = ["Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
let day = days[now.getDay()];

let months = ["March", "April", "May","June", "July", "August", "September", "October", "November", "December", "January", "February"];
let month = months[now.getMonth()];

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

if (hours < 10) {
    `0${hours}`;
}

if (minutes < 10) {
    `0${minutes}`;
}
let time = `${hours}:${minutes}`;

let display = `${day} ${date} ${month}, ${time}`;
return display(daytime);
}

let currentdisplay = document.querySelector("#paragraph");
let now = new Date();

currentdisplay.innerHTML = formatDate(currentdaytime);