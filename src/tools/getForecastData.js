import axios from "axios";
import testData from "../forecast.json"

function getForecastData(timeWindow, location) {
    try {
//        const data = fetchData(location);

        return (filterData(testData));
    } catch (e) {
        console.error(e);
    }
    return ({empty: true});
}

async function fetchData(location) {
    const forecastData = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location}&days=10&lang=nl`);
    return (forecastData);
}


function filterData(data) {
    const locationData = {
        city: data.location.name,
        country: data.location.country,
        epoch: data.location.localtime_epoch,
        timezone: data.location.tz_id
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

    const forecastData = {days: []};

    for (let i in data.forecast.forecastday) {
        const forecastDay = data.forecast.forecastday[i];
        const day = {
            epoch: forecastDay.date_epoch,
            hours: []
        };

        let epochChecker = false;

        for (let j in forecastDay.hour) {

            const hour = {
                epoch: forecastDay.hour[j].time_epoch,
                temperature: forecastDay.hour[j].temp_c,
                description: forecastDay.hour[j].condition.text,
                wind_speed: forecastDay.hour[j].wind_kph,
                wind_degree: forecastDay.hour[j].wind_degree,
                wind_direction: forecastDay.hour[j].wind_dir,
                precip: forecastDay.hour[j].precip_mm,
                cloud_coverage: forecastDay.hour[j].cloud,
                uv_index: forecastDay.hour[j].uv,
                gusts: forecastDay.hour[j].gust_kph,
                icon: forecastDay.hour[j].condition.icon
            }

            if (i === "0") {

                if (data.current.last_updated_epoch === hour.epoch) {
                    day.hours.push(hour);
                    epochChecker = true;
                } else if (epochChecker) {
                    day.hours.push(hour);
                }

            } else {
                day.hours.push(hour);
            }
        }
        forecastData.days.push(day);
    }

    const filteredData = {
        empty: false,
        location_data: locationData,
        current_data: weatherData,
        forecast_data: forecastData
    };
    return (filteredData);
}

export default getForecastData;