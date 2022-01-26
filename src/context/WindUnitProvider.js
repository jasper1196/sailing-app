import React, {createContext, useState} from "react";
import convertWindUnit from "../tools/convertWindUnit";

export const WindUnitContext = createContext(null);

function WindUnitProvider({children}) {
    const [selectedWindUnit, setWindUnit] = useState("Bft");

    function selectWindUnit(unit) {
        if (unit !== selectedWindUnit) {
            setWindUnit(unit);
        }
    }

    return (
        <WindUnitContext.Provider value={{
            selectedWindUnit,
            selectWindUnit,
            convertWind: convertWindUnit
        }}>
            {children}
        </WindUnitContext.Provider>
    );
}

export default WindUnitProvider;