import React from "react";
import "./DefaultInformation.css";

function DefaultInformation(data) {
    return (
        <div
            className="default-information"
        >
            <label>{data.date}</label>
            <label>{data.time}</label>
            <label>{data.temp}</label>
            <label>{data.desc}</label>
        </div>
    );
}

export default DefaultInformation;