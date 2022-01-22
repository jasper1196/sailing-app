function prepDefaultData(data, interval) {
    try {
        const tempData = [];

        for (let i in data.forecast_data.days) {
            for (let j in data.forecast_data.days[i].hours) {
                const tempHourData = {
                    key: data.forecast_data.days[i].hours[j].epoch,
                    date: convertEpoch(data.forecast_data.days[i].hours[j].epoch).date,
                    time: convertEpoch(data.forecast_data.days[i].hours[j].epoch).time,
                    temperature: data.forecast_data.days[i].hours[j].temperature,
                    description: data.forecast_data.days[i].hours[j].description
                };
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
        console.log("Error caught");
        console.error(e);
    }
}

function convertEpoch(epoch) {
    const fullDate = new Date(epoch * 1000);

    const date = fullDate.toLocaleDateString("en-GB",{dateStyle: "short"});
    const time = fullDate.toLocaleTimeString("en-GB", {timeStyle: "short"});

    return {date, time};
}

export default prepDefaultData;