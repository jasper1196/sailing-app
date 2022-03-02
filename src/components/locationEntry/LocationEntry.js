import React, {useContext} from "react";
import styles from "./LocationEntry.module.css";
import {ReactComponent as Cross} from "../../assets/cross.svg";
import {FavoritesContext} from "../../context/FavoritesProvider";
import capitalizeString from "../../tools/capitalizeString";

function LocationEntry({location, setSearchLocation, setLocationValue}) {
    const {remFavorite} = useContext(FavoritesContext);

    function handleClick() {
        setSearchLocation(location[1]);
        setLocationValue(location[1]);
    }

    return (
        <div className={styles.entry}>
            <label
                className={styles["entry-text"]}
                onClick={handleClick}
            >
                {capitalizeString(location[1])}
            </label>
            <Cross
                className={styles["remove-entry-btn"]}
                onClick={() => (remFavorite(location[0]))}
            />
        </div>
    );
}

export default LocationEntry;