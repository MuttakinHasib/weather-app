class Weather {
  constructor(city, state) {
    this.apiKey = "6186175422337007f1fe3f03fc247c38";
    // this.apiKey = "47625f9b4f424f7ca25f9b4f42af7c49";
    this.city = city;
    this.state = state;
  }

  // fetch from api

  async getWeather() {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`
    );
    const resData = await res.json();
    console.log(resData);
    

    return resData;
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
