import React from "react";
import "./ForecastPage.css";
import ForecastSidebar from "../../components/forecastSidebar/ForecastSidebar"

function ForecastPage() {
    return (
        <div className="forecast-page">
            <ForecastSidebar />
            <label>forecast</label>
        </div>
    );
}

export default ForecastPage;