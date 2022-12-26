import { App, top, mid } from "./App.js";

window.addEventListener('load', async ()=>{
  
  App.getCoordinates()

  const plusIconSrc = "../css/icons/plus.png"
  const menuIconSrc = "../css/icons/menu.png"
  const statusIconSrc = "../css/icons/status.png"

  top.plusIcon.src = plusIconSrc
  top.menuIcon.src = menuIconSrc

  // mid.statusIcon

  setTimeout(() => {
    //Make use of App.LocalResponse here
    console.log(App.LocalResponse)
    top.City.textContent = App.LocalResponse.name

    mid.Status.textContent = App.LocalResponse.weather[0].main
    mid.Temperature.textContent = Math.round(App.LocalResponse.main.temp - 273.15) + "°"
    mid.MaxTemp.textContent =  Math.round(App.LocalResponse.main.temp_max - 273.15) + "°C"
    mid.MinTemp.textContent =  Math.round(App.LocalResponse.main.temp_min - 273.15) + "°C"
  }, 4000)
});