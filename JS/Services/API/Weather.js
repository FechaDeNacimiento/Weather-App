export default class Weather {
  constructor() {
    (this.API_KEY = "0aff92f8c4978182c5d1d5b40cd8d71e"), this.Georesponse;
    this.LocalResponse;
    this.cityResponse
    this.lat;
    this.lng;
  }

  async #getLocalWeather(lat, lgn) {
    const GeoRequest = await fetch(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lgn}&limit=4&appid=${this.API_KEY}`,
      { mode: "cors" }
    );
    this.Georesponse = await GeoRequest.json();
    const LocalCity = this.Georesponse[0].name
    this.LocalResponse = await this.getWeather(LocalCity)
  }

  async getWeather(City){
    const requestCity = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${City}&APPID=${this.API_KEY}`,
      { mode: "cors" }
    );
    this.cityResponse =  await requestCity.json();
    return this.cityResponse
  }

  getCoordinates() {
    navigator.geolocation.getCurrentPosition(async (position) => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      await this.#getLocalWeather(this.lat, this.lng);
    });
  }
}

/*
  @use
  Use with and App Object
  and call getCoordinates with
  the initial page load

  @methods

  getCoordinates(){
    returns a LocalResponse property
    which contains information about 
    the current city Weather ( use with setTimeOut(()=>{}, 5000 ) )
  }

  getWeather(City){
    returns an object with information about
    the weather of the given city
  }
*/ 