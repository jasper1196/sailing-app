import React, {useEffect} from "react";
import './TopBar.css';
import logo from '../../assets/logo.png';
import TempUnitSelector from "../tempUnitSelector/TempUnitSelector";
import WindPicker from "../windPicker/WindPicker";
import FavoriteIcon from "../favIcon/FavoriteIcon";
import SearchBar from "../searchBar/SearchBar";
import {Link, useLocation} from "react-router-dom";
import DynamicLoginButton from "../dynamicLoginButton/DynamicLoginButton";


function TopBar({locationHandler}) {
    const location = useLocation();

    useEffect(() => {
        console.log(location);
    }, [location])

    return (
        <div className="top-bar">
            <Link to="/forecast">
                <img src={logo} alt="logo" id="logo-img"/>
            </Link>
            <div
                className="forecast-components"
                id={location.pathname === "/forecast" ? "show" : "no-show"}
            >
                <SearchBar locationHandler={locationHandler}/>
                <DynamicLoginButton />
                <FavoriteIcon />
                <TempUnitSelector/>
                <WindPicker />
            </div>
        </div>
    );
}

export default TopBar;