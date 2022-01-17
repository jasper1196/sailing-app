import React, {createContext, useState} from "react";

export const WindUnitContext = createContext(null);

function WindUnitProvider({children}) {
    const [selectedWindUnit, setWindUnit] = useState(null);

    function changeWindUnit(unit) {
        if (unit === !selectedWindUnit) {
            setWindUnit(unit);
        }
        console.log(unit);
    }

    return (
        <WindUnitContext.Provider value={{
            setWindUnit,
            changeWindUnit
        }}>
            {children}
        </WindUnitContext.Provider>
    );
}

export default WindUnitProvider;