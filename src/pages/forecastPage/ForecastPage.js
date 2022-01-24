import React, {useEffect, useRef, useState, useContext} from "react";
import "./ForecastPage.css";
import ForecastSidebar from "../../components/forecastSidebar/ForecastSidebar";
import DefaultInformation from "../../components/defaultInformation/DefaultInformation";
import prepDefaultData from "../../tools/prepDefaultData";
import {TempUnitContext} from "../../context/TempUnitProvider";


function ForecastPage({data}) {
    const [defaultView, setDefaultView] = useState(true);
    const [forecastHours, setForecastHours] = useState(6);
    const [dataLoaded, setDataLoaded] = useState(false);
    const {changeTempUnit} = useContext(TempUnitContext);
    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current) {
            if (!data.empty) {
                console.log(data);
                setDataLoaded(true);
            } else {
                console.log(data);
                //TODO: error loading data try again something like this
            }
        } else {
            isMounted.current = true;
        }

    }, [data]);

    return (
        <div className="forecast-page">
            <ForecastSidebar
                defaultView={defaultView}
                switchView={setDefaultView}
                changeForecastRange={setForecastHours}
                data={data}
            />
            {!dataLoaded ?

                <label>No data loaded</label>

                :

                <div className="forecast">
                    {defaultView ?

                        prepDefaultData(data, forecastHours).map((hour) => {

                        return (
                            <DefaultInformation
                                key={hour.key}
                                date={hour.date}
                                time={hour.time}
                                temp={changeTempUnit(hour.temperature)}
                                desc={hour.description}
                            />
                        )})

                        :

                        <label>extended</label>}
                </div>



            }

        </div>
    );
}

export default ForecastPage;