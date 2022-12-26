import Weather from "./Services/API/Weather.js";
import Top from "./UI/Top.js";

const App = new Weather();
const top = Top();

export {
    App,
    top
}