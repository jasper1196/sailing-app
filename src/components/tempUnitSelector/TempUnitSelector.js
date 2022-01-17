import React, {useContext, useEffect, useState} from "react";
import {TempUnitContext} from "../../context/TempUnitProvider";

function TempUnitSelector() {
    const [isCelsius, setIsCelsius] = useState(true);
    const {selectTempUnit, tempUnitSpec} = useContext(TempUnitContext);

    useEffect(() => {
        selectTempUnit();
    }, [isCelsius]);

    return (
        <div>
            <button
                type="button"
                className="temp-switcher"
                onClick={() => {setIsCelsius(!isCelsius)}}
            >
                {isCelsius ? "°C" : "°F"}
            </button>
        </div>
    );
}

export default TempUnitSelector;