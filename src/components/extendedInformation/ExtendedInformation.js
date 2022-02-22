import React, {useContext} from "react";
import styles from "./ExtendedInformation.module.css";
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
            className={styles.container}
        >
            <label className={styles.labels}>
                {data.date}
                <span className={styles.tooltips}>Datum</span>
            </label>
            <label className={styles.labels}>
                {data.time}
                <span className={styles.tooltips}>Datum</span>
            </label>
            <label className={styles.labels}>
                {changeTempUnit(data.temperature)}
                <span className={styles.tooltips}>tooltip</span>
            </label>
            <img
                className={styles["weather-icon"]}
                src={data.icon}
            />
            <label className={styles.labels}>
                {data.description}
                <span className={styles.tooltips}>tooltip</span>
            </label>
            <label className={styles.labels}>
                {convertWind(data.wind_speed, selectedWindUnit)}
                <span className={styles.tooltips}>tooltip</span>
            </label>
            <WindIcon degree={data.wind_degree}/>
            <label className={styles.labels}>
                {data.wind_direction}
                <span className={styles.tooltips}>tooltip</span>
            </label>
            <label className={styles.labels}>
                {convertWind(data.gusts, selectedWindUnit)}
                <span className={styles.tooltips}>tooltip</span>
            </label>
            <label className={styles.labels}>
                {data.cloud_cover} %
                <span className={styles.tooltips}>tooltip</span>
            </label>
            <label className={styles.labels}>
                {data.precip} mm
                <span className={styles.tooltips}>tooltip</span>
            </label>
            <label className={styles.labels}>
                {getSunscreenAdvise(data.uv_index, data.cloud_cover).advise}
                <span className={styles.tooltips}>tooltip</span>
            </label>
            <label className={styles.labels}>
                {getSunscreenAdvise(data.uv_index, data.cloud_cover).factor}
                <span className={styles.tooltips}>tooltip</span>
            </label>
            <label className={styles.labels}>
                {getSailgrade(data.wind_speed, data.gusts, data.temperature, data.precip)}
                <span className={styles.tooltips}>tooltip</span>
            </label>
        </div>
    );
}

export default ExtendedInformation;