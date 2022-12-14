
export default class Weather {
    constructor() {
      (this.API_KEY = "0aff92f8c4978182c5d1d5b40cd8d71e"),
       this.Georesponse
       this.response
       this.lat
       this.lng
    }
  
    async getWeather(lat, lgn) {
      const GeoRequest = await fetch(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lgn}&limit=4&appid=${this.API_KEY}`,
        { mode: "cors" }
      );
      this.Georesponse = await GeoRequest.json()
      console.log(this.Georesponse[0].name)

      const request = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.Georesponse[0].name}&APPID=${this.API_KEY}`,
        {mode: "cors"});
      
      this.response = await request.json();
      console.log(this.response)

    }

     getCoordinates() {
      navigator.geolocation.getCurrentPosition(async position => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          await this.getWeather(this.lat, this.lng);
      });
  }
}

const App = new Weather();
App.getCoordinates()