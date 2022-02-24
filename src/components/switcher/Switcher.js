import React, {useState} from "react";
import "./Switcher.css"

function Switcher(props) {
    const [selectedOption, setSelectedOption] = useState(true);

    function switchView() {
        setSelectedOption(!selectedOption);
        props.switchView(!props.view);
    }


    return (
        <div className="switch">
            <label
                className="options"
                id={selectedOption ? "highlighted" : "not-highlighted"}
                onClick={() => (switchView())}
            >
                {props.option1}
            </label>
            <label
                className="options"
                id={selectedOption ? "not-highlighted" : "highlighted" }
                onClick={() => (switchView())}
            >
                {props.option2}
            </label>
        </div>
    );
}

export default Switcher;