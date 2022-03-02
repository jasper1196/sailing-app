import React, {useContext, useState} from "react";
import {ReactComponent as Star} from "../../assets/star.svg";
import styles from "./FavoriteIcon.module.css";
import {FavoritesContext} from "../../context/FavoritesProvider";
import LocationEntry from "../locationEntry/LocationEntry";

function FavoriteIcon({setSearchLocation, setLocationValue}) {
    const [opened, setOpened] = useState(false);
    const {getFavoritesArray} = useContext(FavoritesContext);

    return (
        <div
            className={styles["favorite-wrapper"]}
            onMouseEnter={() => {setOpened(true)}}
            onMouseLeave={() => {setOpened(false)}}
        >
            <Star className={styles.star}/>
            {opened &&
                <div className={styles.locations}>
                    {getFavoritesArray().map((location) => (
                        <LocationEntry location={location} setSearchLocation={setSearchLocation} setLocationValue={setLocationValue}/>
                    ))}
                </div>
            }
        </div>
    );
}

export default FavoriteIcon;