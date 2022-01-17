import React, {useState, useContext, useEffect} from "react";
import {WindUnitContext} from "../../context/WindUnitProvider";

function WindPicker(props) {
    const [selectedOption, selectOption] = useState(props.selected);
    const [opened, toggleOpened] = useState(false);

    const {changeWindUnit} = useContext(WindUnitContext);
    const windUnits = [
        {
            "unit": "Bft",
            "id": 1
        },
        {
            "unit": "knopen",
            "id": 2
        },
        {
            "unit": "m/s",
            "id": 3
        },
        {
            "unit": "km/h",
            "id": 4
        },
        {
            "unit": "mph",
            "id": 5
        }
    ];

    useEffect(() => {
        changeWindUnit(selectedOption);
    }, [selectedOption]);


    return(
        <div className="menu-wrapper">
            <button
                type="button"
                className="menu-header"
                onClick={() => {
                    if (!opened) {
                        toggleOpened(true);
                    } else {
                        toggleOpened(false);
                    }
                }}
            >
                {selectedOption}
            </button>
            {opened &&
                <div>
                    {windUnits.map((entry) => (
                        <button
                            type="button"
                            key={entry.id}
                            onClick={() => {
                                toggleOpened(false)
                                selectOption(entry.unit)
                            }}
                        >
                            {entry.unit}
                        </button>
                    ))}
                </div>
            }
        </div>
    );
}

export default WindPicker;