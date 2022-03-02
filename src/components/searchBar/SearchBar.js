import React, {useEffect, useState} from "react";
import "./SearchBar.css";
import {ReactComponent as SearchIcon} from "../../assets/seachIcon.svg";

function SearchBar({setSearchLocation, locationValue}) {
    const [locationInput, setLocationInput] = useState("");

    function getLocationForecast() {
        if (locationInput !== "") {
            setSearchLocation(locationInput);
            setLocationInput("");
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