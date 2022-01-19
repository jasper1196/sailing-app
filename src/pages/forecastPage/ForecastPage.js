import React, {useEffect} from "react";
import "./ForecastPage.css";
import ForecastSidebar from "../../components/forecastSidebar/ForecastSidebar"

function ForecastPage({data}) {

    useEffect(() => {
        if (!data.empty) {
            console.log(data);
        } else {
            console.log(data);
            //TODO: error loading data try again something like this
        }
    }, [data]);

    return (
        <div className="forecast-page">
            <ForecastSidebar />
            <label>forecast</label>
        </div>
    );
}

export default ForecastPage;