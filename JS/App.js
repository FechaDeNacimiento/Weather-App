import Weather from "./Services/API/Weather.js";
import Mid from "./UI/Mid.js";
import Top from "./UI/Top.js";

const App = new Weather();
const top = Top();
const mid = Mid();

export {
    App,
    top,
    mid
}