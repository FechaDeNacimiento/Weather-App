import { App, top } from "./App.js";

window.addEventListener('load', async ()=>{
  
  App.getCoordinates()

  const plusIconSrc = "../css/icons/plus.png"
  const menuIconSrc = "../css/icons/menu.png"

  top.plusIcon.src = plusIconSrc
  top.menuIcon.src = menuIconSrc

  setTimeout(() => {
    //Make use of App.LocalResponse here
    console.log(App.LocalResponse)
    top.City.textContent = App.LocalResponse.name
  }, 300)
})