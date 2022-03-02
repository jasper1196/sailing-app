import React, {Fragment, useState} from "react";
import styles from './TopBar.module.css';
import logo from '../../assets/logo.svg';
import TempUnitSelector from "../tempUnitSelector/TempUnitSelector";
import WindPicker from "../windPicker/WindPicker";
import FavoriteIcon from "../favIcon/FavoriteIcon";
import SearchBar from "../searchBar/SearchBar";
import {Link, useLocation} from "react-router-dom";
import DynamicLoginButton from "../dynamicLoginButton/DynamicLoginButton";


function TopBar({setSearchLocation}) {
    const [locationValue, setLocationValue] = useState("");
    const location = useLocation();

    return (
        <div className={styles["top-bar"]}>
            <Link to="/forecast">
                <img src={logo} alt="logo" className={styles["logo-img"]}/>
            </Link>
            {location.pathname === "/forecast" &&
                <Fragment>
                    <SearchBar setSearchLocation={setSearchLocation} locationValue={locationValue}/>
                    <div className={styles["forecast-components"]}>
                        <DynamicLoginButton />
                        <FavoriteIcon setSearchLocation={setSearchLocation} setLocationValue={setLocationValue}/>
                        <TempUnitSelector />
                        <WindPicker />
                    </div>
                </Fragment>
            }
        </div>
    );
}

export default TopBar;