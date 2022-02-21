import React, {Fragment, useState} from "react";
import styles from './TopBar.module.css';
import logo from '../../assets/logo.png';
import TempUnitSelector from "../tempUnitSelector/TempUnitSelector";
import WindPicker from "../windPicker/WindPicker";
import FavoriteIcon from "../favIcon/FavoriteIcon";
import SearchBar from "../searchBar/SearchBar";
import {Link, useLocation} from "react-router-dom";
import DynamicLoginButton from "../dynamicLoginButton/DynamicLoginButton";


function TopBar({locationHandler}) {
    const [locationValue, setLocationValue] = useState("");
    const location = useLocation();

    return (
        <div className={styles["top-bar"]}>
            <Link to="/forecast">
                <img src={logo} alt="logo" className={styles["logo-img"]}/>
            </Link>

            {location.pathname === "/forecast" &&
                <Fragment>
                    <SearchBar locationHandler={locationHandler} locationValue={locationValue}/>
                    <div className={styles["forecast-components"]}>
                        <DynamicLoginButton />
                        <FavoriteIcon locationHandler={locationHandler} setLocationValue={setLocationValue}/>
                        <TempUnitSelector />
                        <WindPicker />
                    </div>
                </Fragment>

            }


        </div>
    );
}

export default TopBar;