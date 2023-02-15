function search(event) {
  event.preventDefault();
  let input = document.querySelector("#sCity");
  let apiKey = "6af7bd3e3b6196ce7bef8fcf61f42f53";
  let city = input.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(weather);
}

let form = document.querySelector(".city");
form.addEventListener("submit", search);

function weather(response) {
  console.log(response.data);
  let h2 = document.querySelector("h2");
  h2.innerHTML = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  let currentTemperature = document.querySelector("#temperature");
  currentTemperature.innerHTML = `${temperature}°C`;
}

function getPosition() {
  navigator.geolocation.getCurrentPosition(showLocation);
}

function showLocation(position) {
  let apiKey = "6af7bd3e3b6196ce7bef8fcf61f42f53";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let location = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(location).then(weather);
}

let button = document.querySelector("button");
button.addEventListener("click", getPosition);
