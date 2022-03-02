import convertEpoch from "./convertEpoch";

function prepData(data, interval, extended) {
    try {
        const tempData = [];

        for (let i in data.forecast_data.days) {
            for (let j in data.forecast_data.days[i].hours) {
                const forecast = data.forecast_data.days[i].hours[j];

                const tempHourData = {
                    key: forecast.epoch,
                    date: convertEpoch(forecast.epoch).date,
                    time: convertEpoch(forecast.epoch).time,
                    temperature: forecast.temperature,
                    description: forecast.description
                };

                if (extended) {
                    tempHourData.icon = forecast.icon;
                    tempHourData.wind_speed = forecast.wind_speed;
                    tempHourData.wind_degree = forecast.wind_degree;
                    tempHourData.wind_direction = forecast.wind_direction;
                    tempHourData.cloud_cover = forecast.cloud_coverage;
                    tempHourData.precip = forecast.precip;
                    tempHourData.gusts = forecast.gusts;
                    tempHourData.uv_index = forecast.uv_index;
                }

                tempData.push(tempHourData);
            }
        }

        let steps = 1;

        switch (interval) {
            case 6:
                steps = 1;
                break;
            case 12:
                steps = 2;
                break;
            case 18:
                steps = 3;
                break;
            case 24:
                steps = 4;
                break;
            case 30:
                steps = 5;
                break;
            case 36:
                steps = 6;
                break;
            case 43:
                steps = 7;
                break;
            default:
                steps = 1;
        }

        const preppedData = [];
        let index = 0;

        while (preppedData.length < 7) {
            preppedData.push(tempData[index]);
            index+=steps;
        }

        return preppedData;

    } catch (e) {
        console.error(e);
    }
}

export default prepData;