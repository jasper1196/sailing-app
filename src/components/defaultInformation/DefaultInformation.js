import React from "react";
import "./DefaultInformation.css";

function DefaultInformation(props) {
    return (
        <div
            className="default-information"
        >
            <label>{props.date}</label>
            <label>{props.time}</label>
            <label>{props.temp}</label>
            <label>{props.desc}</label>
        </div>
    );
}

export default DefaultInformation;