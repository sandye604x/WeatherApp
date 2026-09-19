function displayTemperature(response) {
let temp = document.querySelector("#temp");
let temperature = Math.round(response.data.temperature.current);
temp.innerHTML = `${temperature}`;

let cityElement = document.querySelector("#heading"); 
cityElement.innerHTML= response.data.city;
}


function searchCity(event) {
 event.preventDefault();

 let searchcityElement = document.querySelector("#search-city");
 //let searchcity = document.querySelector("#heading");
 let city = searchcityElement.value;

 let apikey = "4932054o633942b306c5da4cf004ctf8";
 let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}`;
axios.get(apiUrl).then(displayTemperature);
}

let searchform = document.querySelector("#search-form");
searchform.addEventListener("submit", searchCity);


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

let months = ["March", "April", "May","June", "July", "August", "September", "October", "November", "December", "January", "February"];
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

let currentdisplay = document.querySelector("#paragraph");
let now = new Date();

currentdisplay.innerHTML = formatDate(now);