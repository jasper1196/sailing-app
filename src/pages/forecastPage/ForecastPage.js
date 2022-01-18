import React, {useEffect} from "react";
import "./ForecastPage.css";
import ForecastSidebar from "../../components/forecastSidebar/ForecastSidebar"

function ForecastPage({data}) {

    useEffect(() => {
        console.log(data);
        //TODO: handle data
    }, [data]);

    return (
        <div className="forecast-page">
            <ForecastSidebar />
            <label>forecast</label>
        </div>
    );
}

export default ForecastPage;