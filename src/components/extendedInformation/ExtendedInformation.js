import React, {useContext} from "react";
import "./ExtendedInformation.css";
import WindIcon from "../windIcon/WindIcon";
import {TempUnitContext} from "../../context/TempUnitProvider";
import {WindUnitContext} from "../../context/WindUnitProvider";

function ExtendedInformation({data}) {

    const {changeTempUnit} = useContext(TempUnitContext);
    const {selectedWindUnit, convertWind} = useContext(WindUnitContext);

    console.log(selectedWindUnit);

    return (
        <div
            className="extended-information"
        >
            <label>{data.date}</label>
            <label>{data.time}</label>
            <label>{changeTempUnit(data.temperature)}</label>
            <img src={data.icon} />
            <label>{data.description}</label>
            <label>{convertWind(data.wind_speed, selectedWindUnit)}</label>
            <WindIcon degree={data.wind_degree}/>
            <label>{data.wind_direction}</label>
            <label>{data.gusts}</label>
            <label>{data.cloud_cover} %</label>
            <label>{data.precip}</label>
            <label>sunscreen</label>
            <label>factor</label>
            <label>sailgrade</label>
        </div>
    );
}

export default ExtendedInformation;