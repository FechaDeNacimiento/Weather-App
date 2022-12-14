import Weather from "./Services/API/Weather.js";
import Geolocation from "./Services/GeoLocation/GeoLocation.js";

const App = new Weather();
const GeoLocator = new Geolocation();

export {
    App,
    GeoLocator
}