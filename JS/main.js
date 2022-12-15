import { App } from "./App.js";

window.addEventListener('load', async ()=>{
  
  App.getCoordinates()

  setTimeout(() => {
    //Make use of App.LocalResponse here
  }, 5000)
  
});