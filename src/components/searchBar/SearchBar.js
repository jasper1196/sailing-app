import React, {useEffect, useState} from "react";
import "./SearchBar.css";
import {ReactComponent as SearchIcon} from "../../assets/seachIcon.svg";

function SearchBar({locationHandler, locationValue}) {
    const [locationInput, setLocationInput] = useState("");

    function getLocationForecast() {
        if (locationInput !== "") {
            locationHandler(locationInput);
            setLocationInput("");
        } else {
            console.log("empty");
        }
    }

    useEffect(() => {
        if (locationValue !== "") {
            setLocationInput("");
        }
    }, [locationValue])

    return (
        <div className="search-bar">
            <input
                id="location-input"
                type="text"
                placeholder="Zoeken..."
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
                onKeyPress={(e) => {
                    if (e.code === "Enter" || e.code === "NumpadEnter") {
                        getLocationForecast()
                    }
                }}
            />
            <SearchIcon
                className="search-icon"
                onClick={getLocationForecast}
            />
        </div>
    );
}

export default SearchBar;