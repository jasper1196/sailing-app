import React, {useContext} from "react";
import "./ExtendedInformation.css";
import WindIcon from "../windIcon/WindIcon";
import {TempUnitContext} from "../../context/TempUnitProvider";
import {WindUnitContext} from "../../context/WindUnitProvider";
import getSunscreenAdvise from "../../tools/getSunscreenAdvise";
import getSailgrade from "../../tools/getSailgrade";

function ExtendedInformation({data}) {

    const {changeTempUnit} = useContext(TempUnitContext);
    const {selectedWindUnit, convertWind} = useContext(WindUnitContext);

    console.log(selectedWindUnit);

    //TODO: create tooltips

    return (
        <div
            className="extended-information"
        >
            <label className="date">{data.date}
                <span className="tooltip">Datum</span>
            </label>
            <label>{data.time}</label>
            <label>{changeTempUnit(data.temperature)}</label>
            <img src={data.icon} />
            <label>{data.description}</label>
            <label>{convertWind(data.wind_speed, selectedWindUnit)}</label>
            <WindIcon degree={data.wind_degree}/>
            <label>{data.wind_direction}</label>
            <label>{convertWind(data.gusts, selectedWindUnit)}</label>
            <label>{data.cloud_cover} %</label>
            <label>{data.precip} mm</label>
            <label>{getSunscreenAdvise(data.uv_index, data.cloud_cover).advise}</label>
            <label>{getSunscreenAdvise(data.uv_index, data.cloud_cover).factor}</label>
            <label>{getSailgrade(data.wind_speed, data.gusts, data.temperature, data.precip)}</label>
        </div>
    );
}

export default ExtendedInformation;