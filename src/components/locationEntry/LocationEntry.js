import React, {useContext} from "react";
import styles from "./LocationEntry.module.css";
import {ReactComponent as Cross} from "../../assets/cross.svg";
import {FavoritesContext} from "../../context/FavoritesProvider";

function LocationEntry({location, locationHandler}) {
    const {remFavorite} = useContext(FavoritesContext);


    function getFavoriteData() {
        console.log(location);
    }

    return (
        <div className={styles.entry}>
            <label
                className={styles["entry-text"]}
                onClick={getFavoriteData}
            >{location[1]}</label>
            <Cross
                className={styles["remove-entry-btn"]}
                onClick={() => (remFavorite(location[0]))}
            />
        </div>
    );
}

export default LocationEntry;