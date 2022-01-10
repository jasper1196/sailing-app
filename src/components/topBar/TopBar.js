import React, {useContext} from "react";
import './TopBar.css';
import logo from '../../assets/logo.png';
import {useState} from "react";

function TopBar() {


    return (
        <div id="top-bar">
            <img src={logo} alt="logo" id="logo-img"/>
            <label>Testing</label>
            <label></label>
        </div>
    );
}

export default TopBar;