const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.state);
const ui = new UI();

document.addEventListener("DOMContentLoaded", getWeather);

const changeLocation = document.getElementById("w-change-btn");

changeLocation.addEventListener("click", e => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  weather.changeLocation(city, state);
  storage.setLocationData(city, state);
  getWeather();
  $("#locModal").modal("hide");
});

setInterval(getWeather, 1000);

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
