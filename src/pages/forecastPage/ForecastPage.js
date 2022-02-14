import React, {useEffect, useRef, useState, useContext, Fragment} from "react";
import "./ForecastPage.css";
import ForecastSidebar from "../../components/forecastSidebar/ForecastSidebar";
import DefaultInformation from "../../components/defaultInformation/DefaultInformation";
import ExtendedInformation from "../../components/extendedInformation/ExtendedInformation";
import prepData from "../../tools/prepData";
import {TempUnitContext} from "../../context/TempUnitProvider";
import WindIcon from "../../components/windIcon/WindIcon";
import getSunscreenAdvise from "../../tools/getSunscreenAdvise";
import getSailgrade from "../../tools/getSailgrade";


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
            {dataLoaded &&

                <div className="forecast">
                    {defaultView ?

                        prepData(data, forecastHours, false).map((hourData, index) => {
                        if (index === 0) {
                            return (
                                <Fragment>
                                    <DefaultInformation
                                        key="row-info-default"
                                        date="datum"
                                        time="tijd"
                                        temp="temperatuur"
                                        desc="beschrijving"
                                    />
                                    <DefaultInformation
                                        key={hourData.key}
                                        date={hourData.date}
                                        time={hourData.time}
                                        temp={changeTempUnit(hourData.temperature)}
                                        desc={hourData.description}
                                    />
                                </Fragment>
                            )
                        } else {
                            return (
                                <DefaultInformation
                                    key={hourData.key}
                                    date={hourData.date}
                                    time={hourData.time}
                                    temp={changeTempUnit(hourData.temperature)}
                                    desc={hourData.description}
                                />
                            )
                        }})

                        :

                        prepData(data, forecastHours, true).map((hourData, index) => {
                            if (index === 0) {
                                return (
                                    <Fragment>
                                        <div
                                            className="extended-information"
                                        >
                                            <label>Datum</label>
                                            <label>Tijd</label>
                                            <label>Temperatuur</label>
                                            <label>Icoon</label>
                                            <label>Beschrijving</label>
                                            <label>Windkracht</label>
                                            <label>Windroos</label>
                                            <label>Windrichting</label>
                                            <label>Kracht vlagen</label>
                                            <label>Bewolking</label>
                                            <label>Neerslag</label>
                                            <label>Zonnenbrand advies</label>
                                            <label>Factor</label>
                                            <label>Zeilcijfer</label>
                                        </div>
                                        <ExtendedInformation
                                            key={hourData.key}
                                            data={hourData}
                                        />
                                    </Fragment>
                                )
                            } else {
                                return (
                                    <ExtendedInformation
                                        key={hourData.key}
                                        data={hourData}
                                    />
                                )
                            }

                        })
                    }
                </div>



            }

        </div>
    );
}

export default ForecastPage;