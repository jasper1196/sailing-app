import axios from "axios";
import testData from "../test.json"

function getForecastData(timeWindow, location) {
    try {
//      const data = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location}`);
    } catch (e) {
        console.error(e);
    }
    return(testData.data);
}

export default getForecastData;