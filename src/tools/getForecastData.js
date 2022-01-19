import axios from "axios";
import testData from "../test.json"

function getForecastData(timeWindow, location) {
    try {
//      const data = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location}`);
//        const forecastData = fetchData(location);

//        console.log(forecastData);
        return (filterData(testData.data));
    } catch (e) {
        console.error(e);
    }
    return ({empty: true});
}

async function fetchData(location) {
    const forecastData = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location}&days=10`);
    return (forecastData);
}


function filterData(data) {
    const locationData = {
        city: data.location.name,
        country: data.location.country,
        epoch: data.location.localtime_epoch
    };
    const weatherData = {
        temperature: data.current.temp_c,
        description: data.current.condition.text,
        wind_speed: data.current.wind_kph,
        wind_degree: data.current.wind_degree,
        wind_direction: data.current.wind_dir,
        precip: data.current.precip_mm,
        cloud_coverage: data.current.cloud,
        uv_index: data.current.uv,
        gusts: data.current.gust_kph
    };
    const filteredData = {empty: false, location_data: locationData, weather_data: weatherData};
    return (filteredData);
}

export default getForecastData;