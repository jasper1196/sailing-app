import React, {createContext, useState} from "react";
import convertToCelsius from "../tools/convertToCelsius";
import convertToFahrenheit from "../tools/convertToFahrenheit";

export const TempUnitContext = createContext(null);

function TempUnitProvider({children}) {
    const [temp, setTemp] = useState("celsius");

    function selectTempUnit() {
        if(temp === "celsius") {
            setTemp("fahrenheit");
        } else {
            setTemp("celsius");
        }
    }

    return (
        <TempUnitContext.Provider value={{
            selectTempUnit,
            changeTempUnit: temp === "celsius" ? convertToCelsius : convertToFahrenheit
        }}>
            {children}
        </TempUnitContext.Provider>
    );
}

export default TempUnitProvider;