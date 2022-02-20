import React, {Fragment, useContext, useEffect, useState} from "react";
import styles from "./TempUnitSelector.module.css";
import {TempUnitContext} from "../../context/TempUnitProvider";

function TempUnitSelector() {
    const [isCelsius, setIsCelsius] = useState(true);
    const {selectTempUnit, tempUnitSpec} = useContext(TempUnitContext);

    useEffect(() => {
        selectTempUnit();
    }, [isCelsius]);

    return (
        <Fragment>
            <button
                type="button"
                className={styles.switcher}
                onClick={() => {setIsCelsius(!isCelsius)}}
            >
                {isCelsius ? "°C" : "°F"}
            </button>
        </Fragment>
    );
}

export default TempUnitSelector;