import React, {useEffect, useRef, useState, useContext, Fragment} from "react";
import styles from "./ForecastPage.module.css";
import ForecastSidebar from "../../components/forecastSidebar/ForecastSidebar";
import DefaultInformation from "../../components/defaultInformation/DefaultInformation";
import ExtendedInformation from "../../components/extendedInformation/ExtendedInformation";
import prepData from "../../tools/prepData";
import {TempUnitContext} from "../../context/TempUnitProvider";


function ForecastPage({data}) {
    const [defaultView, setDefaultView] = useState(true);
    const [forecastHours, setForecastHours] = useState(6);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [dataError, setDataError] = useState(false);
    const {changeTempUnit} = useContext(TempUnitContext);
    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current) {
            if (data !== undefined) {
                if (!data.empty) {
                    setDataLoaded(true);
                } else {
                    setDataError(true);
                }
            }
        } else {
            isMounted.current = true;
        }
    }, [data]);

    return (
        <div className={styles["forecast-page"]}>
            <ForecastSidebar
                defaultView={defaultView}
                switchView={setDefaultView}
                changeForecastRange={setForecastHours}
                data={data}
            />
            {dataLoaded ?
                <div className={styles.forecast}>
                    {defaultView ?
                        prepData(data, forecastHours, false).map((hourData, index) => {
                        if (index === 0) {
                            return (
                                <Fragment>
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
                :
                <div className={styles.forecast}>
                    {dataError ?
                        <label className={styles["instruction-text"]}>Er ies iets fout gegaan bij het ophalen van de data probeer het nogmaals.</label>
                        :
                        <label className={styles["instruction-text"]}>Zoek een locatie om een weersvoorspelling te zien.</label>
                    }
                </div>
            }
        </div>
    );
}

export default ForecastPage;