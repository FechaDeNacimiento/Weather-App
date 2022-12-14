import { App, GeoLocator } from "./App.js";

window.addEventListener('load', async ()=>{
  
  
});

(() => {
  const Input = document.getElementById("weather");
  const form = document.getElementById("form");
  let inputValue
  const Button = document.querySelector("#submit-btn");
  const Data = document.querySelector("#Data");

  

  Button.addEventListener("click", async (e) => {
    {
      inputValue = Input.value

      Data.textContent = App.response.sys.country
      form.reset();
    }
  });
})();
