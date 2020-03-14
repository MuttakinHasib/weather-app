class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.wind = document.getElementById("w-wind");
  }

  kelvinToCelsius(kelvin) {
    return (kelvin - 273.15).toFixed(1);
  }

  kelvinToFahrenheit(kelvin) {
    const celsius = kelvin - 273;
    let fahrenheit = (celsius * (9 / 5) + 32).toFixed(1);
    return fahrenheit;
  }

  paint(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].description;
    this.icon.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    this.string.innerHTML = `${this.kelvinToFahrenheit(
      weather.main.temp
    )}°F (${this.kelvinToCelsius(weather.main.temp)}°C)`;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.feelsLike.innerHTML = `Feels Like: ${Math.floor(
      this.kelvinToFahrenheit(weather.main.feels_like)
    )}°F (${Math.floor(this.kelvinToCelsius(weather.main.feels_like))}°C)`;

    this.wind.innerHTML = `Deg: ${weather.wind.deg}°, Speed: ${weather.wind.speed}`;
  }
}
