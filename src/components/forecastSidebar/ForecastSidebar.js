import React, {Fragment, useContext, useEffect, useRef, useState} from "react";
import styles from "./ForecastSidebar.module.css";
import {ReactComponent as Star} from "../../assets/emptyStar.svg";
import Switcher from "../../components/switcher/Switcher";
import convertEpoch from "../../tools/convertEpoch";
import {FavoritesContext} from "../../context/FavoritesProvider";

function ForecastSidebar({defaultView, switchView, changeForecastRange, data}) {
    const [rangeValue, setRangeValue] = useState("1")
    const [time, setTime] = useState("");
    const [showLocationInfo, setShowLocationInfo] = useState(false);
    const {addFavorite, getFavoritesArray} = useContext(FavoritesContext);
    const isMounted = useRef(false);

    const days = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];

    useEffect(() => {
        changeForecastRange(valueToHours(rangeValue));
    },[rangeValue]);

    useEffect(() => {
        if (isMounted.current) {
            if (data !== undefined) {
                if (!data.empty) {
                    setShowLocationInfo(true);
                    startClock();
                }
            }
        } else {
            isMounted.current = true;
        }
    }, [data]);

    function startClock() {
        const currentDay = new Date();
        setTime(currentDay.toLocaleTimeString("en-GB", {timeZone: data.location_data.timezone}));
        setTimeout(startClock, 1000);
    }

    return (
        <div className={styles.sidebar}>
            {showLocationInfo &&
                <Fragment>
                    <div className={styles["location-information"]}>
                        <div className={styles["city-wrapper"]}>
                            <label className={styles["info-text"]} id="city">{data.location_data.city}</label>
                            <Star
                                className={`${styles.star} ${getFavoritesArray().length > 4 && styles["disabled-star"]}`}
                                onClick={() => {addFavorite(data.location_data.city)}}
                            >
                                add favorite
                            </Star>
                        </div>
                        <label className={styles["info-text"]} id="country">{data.location_data.country}</label>
                        <label className={styles["info-text"]} id="date">{convertEpoch(data.location_data.epoch).date}</label>
                        <label className={styles["info-text"]} id="day">{days[new Date(data.location_data.epoch).getDay()]}</label>
                        <label className={styles["info-text"]} id="time">{time}</label>
                    </div>
                    <div className={styles["range-container"]}>
                        <label className={styles["info-text"]} id="hour-indicator">{valueToHours(rangeValue)} uur</label>
                        <input
                            type="range"
                            min="1"
                            max="7"
                            value={rangeValue}
                            onChange={(e) => {setRangeValue(e.target.value)}}
                            className="slider"
                            id="rangeSlider"
                        />
                    </div>
                    <Switcher
                        option1="Standaard"
                        option2="Uitgebreid"
                        view={defaultView}
                        switchView={switchView}
                    />
                </Fragment>
            }
        </div>
    );
}

function valueToHours(value) {
    let hours;
    switch (value) {
        case "1":
            hours = 6;
            break;
        case "2":
            hours = 12;
            break;
        case "3":
            hours = 18;
            break;
        case "4":
            hours = 24;
            break;
        case "5":
            hours = 30;
            break;
        case "6":
            hours = 36;
            break;
        case "7":
            hours = 43;
            break;
        default:
            hours = 6;
    }
    return hours;
}

export default ForecastSidebar;