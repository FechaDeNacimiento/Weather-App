import { App, top, mid } from "./App.js";

window.addEventListener("load", async () => {
  App.getCoordinates();

  const plusIconSrc = "../css/icons/plus.png";
  const menuIconSrc = "../css/icons/menu.png";
  const statusIconSrc = "../css/icons/status.png";

  top.plusIcon.src = plusIconSrc;
  top.menuIcon.src = menuIconSrc;

  // mid.statusIcon

  setWeather(App);
});

function setWeather(response) {
  setTimeout(() => {
    //Make use of App.cityResponse here
    top.City.textContent = response.cityResponse.name;

    mid.Status.textContent = response.cityResponse.weather[0].main;
    mid.Temperature.textContent =
      Math.round(response.cityResponse.main.temp - 273.15) + "°";
    mid.MaxTemp.textContent =
      Math.round(response.cityResponse.main.temp_max - 273.15) + "°C";
    mid.MinTemp.textContent =
      Math.round(response.cityResponse.main.temp_min - 273.15) + "°C";
  }, 2000);
}