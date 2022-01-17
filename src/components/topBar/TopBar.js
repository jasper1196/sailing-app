import React from "react";
import './TopBar.css';
import logo from '../../assets/logo.png';
import TempUnitSelector from "../tempUnitSelector/TempUnitSelector";
import WindPicker from "../windPicker/WindPicker";
import FavoriteIcon from "../favIcon/FavoriteIcon";
import SearchBar from "../searchBar/SearchBar";

function TopBar({locationHandler}) {

    return (
        <div className="top-bar">
            <img src={logo} alt="logo" id="logo-img"/>
            <SearchBar locationHandler={locationHandler} />
            <FavoriteIcon />
            <TempUnitSelector/>
            <WindPicker
                selected="Bft"
            />
        </div>
    );
}

export default TopBar;